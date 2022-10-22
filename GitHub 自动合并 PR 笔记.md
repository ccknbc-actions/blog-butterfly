---
title: GitHub 自动合并 PR 笔记
translate_title: github-automatically-merges-pull-requests-notes
subtitle: GitHub Automatically Merges Pull Requests Notes
date: 2021-01-18 00:00:00
updated: 2021-01-18 00:00:00
tags: 工具
categories: 工具
keywords: [工具, GitHub]
description: GitHub 自动合并 PR 笔记
cover: https://pic1.afdiancdn.com/user/8a7f563c2e3811ecab5852540025c377/common/75d33bcc96205123aa3a40aae776d793_w2560_h1440_s704.jpg
comments: true
id: 21
---

本文首发在[**语雀**](https://www.yuque.com/ccknbc/blog/21)
自动同步更新至[**CC 的部落格**](https://blog.ccknbc.cc/posts/github-automatically-merges-pull-requests-notes)

# automerge-action

GitHub action to automatically merge pull requests when they are ready.

![](https://cdn.nlark.com/yuque/0/2021/svg/8391407/1610874798961-ae345ffc-d1e6-425f-900a-8f69e4ee5a53.svg#crop=0&crop=0&crop=1&crop=1&height=45&id=oSNvE&originHeight=256&originWidth=564&originalType=binary&ratio=1&rotation=0&showTitle=false&size=0&status=done&style=none&title=&width=100)

When added, this action will run the following tasks on pull requests with the
`automerge` label:

- Changes from the base branch will automatically be merged into the pull
  request (only when "Require branches to be up to date before merging"
  is enabled in the branch protection rules)
- When the pull request is ready, it will automatically be merged. The action
  will only wait for status checks that are marked as required in the branch
  protection rules
- Pull requests without any configured labels will be ignored

Labels, merge and update strategies are configurable, see [Configuration](#configuration).

A pull request is considered ready when:

1. the required number of review approvals has been given (if enabled in the
   branch protection rules) and
2. the required checks have passed (if enabled in the branch protection rules)
   and
3. the pull request is up to date (if enabled in the branch protection rules)

After the pull request has been merged successfully, the branch will _not_ be
deleted. To delete branches after they are merged,
see [automatic deletion of branches](https://help.github.com/en/articles/managing-the-automatic-deletion-of-branches).

## Usage

Create a new `.github/workflows/automerge.yml` file:

```yaml
name: automerge
on:
  pull_request:
    types:
      - labeled
      - unlabeled
      - synchronize
      - opened
      - edited
      - ready_for_review
      - reopened
      - unlocked
  pull_request_review:
    types:
      - submitted
  check_suite:
    types:
      - completed
  status: {}
jobs:
  automerge:
    runs-on: ubuntu-latest
    steps:
      - name: automerge
        uses: "pascalgn/automerge-action@v0.13.0"
        env:
          GITHUB_TOKEN: "${{ secrets.GITHUB_TOKEN }}"
```

For the latest version, see the [list of releases](https://github.com/pascalgn/automerge-action/releases).

## Configuration

The following merge options are supported:

- `MERGE_LABELS`: The labels that need to be present for a pull request to be
  merged (using `MERGE_METHOD`). The default value is `automerge`.
  This option can be a comma-separated list of labels that will be checked. All
  labels in the list need to be present, otherwise the pull request will be
  skipped (until all labels are present). Labels prefixed with an exclamation
  mark (`!`) will block a pull request from being merged, when present.
  For example, when `automerge,!wip,!work in progress` is given,
  any pull requests with the labels `wip` or `work in progress` and any pull
  requests _without_ the label `automerge` will not be merged.
  Blocking labels take precedence, so if a pull request has both labels
  `wip` and `automerge`, it will not be merged.
  When an empty string (`""`) is given, all pull requests will be merged.
- `MERGE_REMOVE_LABELS`: The labels to automatically remove from a pull request
  once it has been merged by the action. The default value is `""`.
  This option can be a comma-separated list of labels that will be removed.
  When an empty string (`""`) is given, no labels will be removed.
- `MERGE_METHOD`: Which method to use when merging the pull request into
  the base branch. Possible values are
  `[merge](https://help.github.com/en/articles/about-pull-request-merges)` (create a merge commit),
  `[rebase](https://help.github.com/en/articles/about-pull-request-merges#rebase-and-merge-your-pull-request-commits)`
  (rebase all commits of the branch onto the base branch)
  or `[squash](https://help.github.com/en/articles/about-pull-request-merges#squash-and-merge-your-pull-request-commits)`
  (squash all commits into a single commit). The default option is `merge`.
- `MERGE_METHOD_LABELS`: Set to allow labels to determine the merge method
  (see `MERGE_METHOD` for possible values).
  For example, `automerge=merge,autosquash=squash`. If no such label is present,
  the method set by `MERGE_METHOD` will be used. The default value is `""`.
- `MERGE_METHOD_LABEL_REQUIRED`: Set to `true` to require one of the
  `MERGE_METHOD_LABELS` to be set. The default value is `false`.
- `MERGE_COMMIT_MESSAGE`: The commit message to use when merging the pull
  request into the base branch. Possible values are `automatic` (use GitHub's
  default message), `pull-request-title` (use the pull request's title),
  `pull-request-description` (use the pull request's description),
  `pull-request-title-and-description` or a literal
  value with optional placeholders (for example `Auto merge {pullRequest.number}`).
  The default value is `automatic`.
- `MERGE_COMMIT_MESSAGE_REGEX`: When using a commit message containing the
  PR's body, use the first capturing subgroup from this regex as the commit
  message. Can be used to separate content that should go with the commit into
  the code base's history from boilerplate associated with the PR (licensing
  notices, check lists, etc). For example, `(.*)^---` would keep everything up
  until the first 3-dash line (horizontal rule in MarkDown) from the commit
  message. The default value is empty, which disables this feature.
- `MERGE_FILTER_AUTHOR`: When set, only pull requests raised by this author
  will be merged automatically.
- `MERGE_FORKS`: Whether merging from external repositories is enabled
  or not. By default, pull requests with branches from forked repositories will
  be merged the same way as pull requests with branches from the main
  repository. Set this option to `false` to disable merging of pull requests
  from forked repositories. The default value is `true`.
- `MERGE_RETRIES` and `MERGE_RETRY_SLEEP`: Sometimes, the pull request check
  runs haven't finished yet, so the action will retry the merge after some time.
  The number of retries can be set with `MERGE_RETRIES`.
  The default number of retries is `6` and setting it to `0` disables the retry logic.
  `MERGE_RETRY_SLEEP` sets the time to sleep between retries, in milliseconds.
  The default is `5000` (5 seconds) and setting it to `0` disables sleeping
  between retries.
- `MERGE_DELETE_BRANCH`: Automatic deletion of branches does not work for all
  repositories. Set this option to `true` to automatically delete branches
  after they have been merged. The default value is `false`.

The following update options are supported:

- `UPDATE_LABELS`: The labels that need to be present for a pull request to be
  updated (using `UPDATE_METHOD`). The default value is `automerge`.
  Note that updating will only happen when the option "Require branches to be
  up to date before merging" is enabled in the branch protection rules.
  This option can be a comma-separated list of labels, see the `MERGE_LABELS`
  option for more information.
- `UPDATE_METHOD`: Which method to use when updating the pull request
  to the base branch. Possible values are `merge` (create a merge commit) or
  `rebase` (rebase the branch onto the head of the base branch). The default
  option is `merge`.
  When the option is `rebase` and the [rebasing](https://git-scm.com/book/en/v2/Git-Branching-Rebasing)
  failed, the action will exit with error code 1. This will also be visible
  in the pull request page, with a message like "this branch has conflicts
  that must be resolved" and a list of conflicting files.
- `UPDATE_RETRIES` and `UPDATE_RETRY_SLEEP`: Sometimes, the pull request check
  runs haven't finished yet and the action doesn't know if an update is
  necessary. To query the pull request state multiple times, the number of
  retries can be set with `UPDATE_RETRIES`. The default number of retries is `1`
  and setting it to `0` disables the retry logic.
  `UPDATE_RETRY_SLEEP` sets the time to sleep between retries, in milliseconds.
  The default is `5000` (5 seconds) and setting it to `0` disables sleeping
  between retries.

Also, the following general options are supported:

- `GITHUB_TOKEN`: This should always be `"${{ secrets.GITHUB_TOKEN }}"`.
  However, in some cases it can be useful to run this action as a certain user
  (by default, it will run as `github-actions`). This can be useful if you want
  to use the "Restrict who can push to matching branches" option in the branch
  protection rules, for example.
  To use this setting for manually providing a token, you need to create a
  [personal access token](https://help.github.com/en/articles/creating-a-personal-access-token-for-the-command-line)
  for the user (make sure to check `public_repo` when it's a public repository
  or `repo` when it's a private repository). All API requests (merge/rebase)
  will then be executed as the specified user. The token should be kept secret,
  so make sure to add it as secret, not as environment variable, in the GitHub
  workflow file!

You can configure the environment variables in the workflow file like this:

```yaml
env:
  GITHUB_TOKEN: "${{ secrets.GITHUB_TOKEN }}"
  MERGE_LABELS: "automerge,!work in progress"
  MERGE_REMOVE_LABELS: "automerge"
  MERGE_METHOD: "squash"
  MERGE_COMMIT_MESSAGE: "pull-request-description"
  MERGE_FORKS: "false"
  MERGE_RETRIES: "6"
  MERGE_RETRY_SLEEP: "10000"
  UPDATE_LABELS: ""
  UPDATE_METHOD: "rebase"
```

## Supported Events

Automerge can be configured to run for these events:

- `check_run`
- `check_suite`
- `issue_comment`
- `pull_request_review`
- `pull_request_target`
- `pull_request`
- `push`
- `repository_dispatch`
- `schedule`
- `status`
- `workflow_dispatch`

For more information on when these occur, see the Github documentation on [events that trigger workflows](https://docs.github.com/en/actions/reference/events-that-trigger-workflows) and [their payloads](https://docs.github.com/en/developers/webhooks-and-events/webhook-events-and-payloads).

## Limitations

- When a pull request is merged by this action, the merge will not trigger other GitHub workflows.
  Similarly, when another GitHub workflow creates a pull request, this action will not be triggered.
  This is because [an action in a workflow run can't trigger a new workflow run](https://help.github.com/en/actions/automating-your-workflow-with-github-actions/events-that-trigger-workflows). However, the `[workflow_run](https://docs.github.com/en/free-pro-team@latest/actions/reference/events-that-trigger-workflows#workflow_run)` event is triggered as expected.
- When [using a personal access token (PAT) to work around the above limitation](https://help.github.com/en/actions/reference/events-that-trigger-workflows#triggering-new-workflows-using-a-personal-access-token), note that when the user issuing the PAT is an administrator and [branch restrictions do not include administrators](https://help.github.com/en/github/administering-a-repository/enabling-branch-restrictions), pull requests may be merged even if they are not mergeable for non-administrators (see [#65](https://github.com/pascalgn/automerge-action/issues/65)).
- Currently, there is no way to trigger workflows when the pull request branch
  becomes out of date with the base branch. There is a request in the
  [GitHub community forum](https://github.community/t5/GitHub-Actions/New-Trigger-is-mergable-state/m-p/36908).

## Debugging

To run the action with full debug logging, update your workflow file as follows:

```
      - name: automerge
        uses: pascalgn/automerge-action@...
        with:
          args: "--trace"
```

If you need to further debug the action, you can run it locally.

You will need a [personal access token](https://help.github.com/en/github/authenticating-to-github/creating-a-personal-access-token-for-the-command-line).

Then clone this repository, create a file `.env` in the repository, such as:

```
GITHUB_TOKEN="123abc..."
URL="https://github.com/pascalgn/repository-name/pull/123"
```

Install dependencies with `yarn`, and finally run `yarn it` (or `npm run it`).

## License

[MIT](LICENSE)

# bulldozer

![](https://cdn.nlark.com/yuque/0/2021/svg/8391407/1610874951039-f74d3099-f28f-4856-ade7-6c677ce4869d.svg#crop=0&crop=0&crop=1&crop=1&height=20&id=oob8t&originHeight=20&originWidth=110&originalType=binary&ratio=1&rotation=0&showTitle=false&size=0&status=done&style=none&title=&width=110) ![](https://img.shields.io/docker/pulls/palantirtechnologies/bulldozer.svg#crop=0&crop=0&crop=1&crop=1&height=19&id=FEtmj&originHeight=20&originWidth=114&originalType=binary&ratio=1&rotation=0&showTitle=false&status=done&style=none&title=&width=108)

`bulldozer` is a [GitHub App](https://developer.github.com/apps/) that
automatically merges pull requests (PRs) when (and only when) all required
status checks are successful and required reviews are provided.

Additionally, `bulldozer` can:

- Only merge pull requests that match certain conditions, like having a
  specific label or comment
- Ignore pull requests that match certain conditions, like having a specific
  label or comment
- Automatically keep pull request branches up-to-date by merging in the target
  branch
- Wait for additional status checks that are not required by GitHub

Bulldozer might be useful if you:

- Have CI builds that take longer than the normal review process. It will merge
  reviewed PRs as soon as the tests pass so you don't have to watch the pull
  request or remember to merge it later.
- Combine it with [policy-bot](https://github.com/palantir/policy-bot) to
  automatically merge certain types of pre-approved or automated changes.
- Want to give contributors more control over when they can merge PRs without
  granting them write access to the repository.
- Have a lot of active development that makes it difficult to merge a pull
  request while it is up-to-date with the target branch.

## Contents

- [Behavior](#behavior)
- [Configuration](#configuration)
  - [bulldozer.yml Specification](#bulldozeryml-specification)
- [FAQ](#faq)
- [Deployment](#deployment)
- [Development](#development)
- [Contributing](#contributing)
- [License](#license)

## Behavior

`bulldozer` will only merge pull requests that GitHub allows non-admin
collaborators to merge. This means that all branch protection settings,
including required status checks and required reviews, are respected. It also
means that you _must_ enable branch protection to prevent `bulldozer` from
immediately merging every pull request.

Only pull requests matching the trigger conditions (or _not_ matching
ignore conditions) are considered for merging. `bulldozer` is event-driven,
which means it will usually merge a pull request within a few seconds of the
pull request satisfying all preconditions.

## Configuration

The behavior of the bot is configured by a `.bulldozer.yml` file at the root of
the repository. The file name and location are configurable when running your
own instance of the server.

The `.bulldozer.yml` file is read from the most recent commit on the target
branch of each pull request. If `bulldozer` cannot find a configuration file,
it will take no action. This means it is safe to enable the `bulldozer` on all
repositories in an organization.

### bulldozer.yml Specification

The `.bulldozer.yml` file supports the following keys.

```yaml
# "version" is the configuration version, currently "1".
version: 1

# "merge" defines how and when pull requests are merged. If the section is
# missing, bulldozer will consider all pull requests and use default settings.
merge:
  # "trigger" defines the set of pull requests considered by bulldozer. If
  # the section is missing, bulldozer considers all pull requests not excluded
  # by the ignore conditions.
  trigger:
    # Pull requests with any of these labels (case-insensitive) are added to
    # the trigger.
    labels: ["merge when ready"]

    # Pull requests where the body or any comment contains any of these
    # substrings are added to the trigger.
    comment_substrings: ["==MERGE_WHEN_READY=="]

    # Pull requests where any comment matches one of these exact strings are
    # added to the trigger.
    comments: ["Please merge this pull request!"]

    # Pull requests where the body contains any of these substrings are added
    # to the trigger.
    pr_body_substrings: ["==MERGE_WHEN_READY=="]

    # Pull requests targeting any of these branches are added to the trigger.
    branches: ["develop"]

    # Pull requests targeting branches matching any of these regular expressions are added to the trigger.
    branch_patterns: ["feature/.*"]

  # "ignore" defines the set of pull request ignored by bulldozer. If the
  # section is missing, bulldozer considers all pull requests. It takes the
  # same keys as the "trigger" section.
  ignore:
    labels: ["do not merge"]
    comment_substrings: ["==DO_NOT_MERGE=="]

  # "method" defines the merge method. The available options are "merge",
  # "rebase", "squash", and "ff-only".
  method: squash

  # Allows the merge method that is used when auto-merging a PR to be different based on the
  # target branch. The keys of the hash are the target branch name, and the values are the merge method that
  # will be used for PRs targeting that branch. The valid values are the same as for the "method" key.
  # Note: If the target branch does not match any of the specified keys, the "method" key is used instead.
  branch_method:
    develop: squash
    master: merge

  # "options" defines additional options for the individual merge methods.
  options:
    # "squash" options are only used when the merge method is "squash"
    squash:
      # "title" defines how the title of the commit message is created when
      # generating a squash commit. The options are "pull_request_title",
      # "first_commit_title", and "github_default_title". The default is
      # "pull_request_title".
      title: "pull_request_title"

      # "body" defines how the body of the commit message is created when
      # generating a squash commit. The options are "pull_request_body",
      # "summarize_commits", and "empty_body". The default is "empty_body".
      body: "empty_body"

      # If "body" is "pull_request_body", then the commit message will be the
      # part of the pull request body surrounded by "message_delimiter"
      # strings. This is disabled (empty string) by default.
      message_delimiter: ==COMMIT_MSG==

  # "required_statuses" is a list of additional status contexts that must pass
  # before bulldozer can merge a pull request. This is useful if you want to
  # require extra testing for automated merges, but not for manual merges.
  required_statuses:
    - "ci/circleci: ete-tests"

  # If true, bulldozer will delete branches after their pull requests merge.
  delete_after_merge: true

# "update" defines how and when to update pull request branches. Unlike with
# merges, if this section is missing, bulldozer will not update any pull requests.
update:
  # "trigger" defines the set of pull requests that should be updated by
  # bulldozer. It accepts the same keys as the trigger in the "merge" block.
  trigger:
    labels: ["WIP", "Update Me"]

  # "ignore" defines the set of pull requests that should not be updated by
  # bulldozer. It accepts the same keys as the ignore in the "merge" block.
  ignore:
    labels: ["Do Not Update"]
```

## FAQ

#### Can I specify both `ignore` and `trigger`?

Yes. If both `ignore` and `trigger` are specified, bulldozer will attempt to match
on both. In cases where both match, `ignore` will take precedence.

#### Can I specify the body of the commit when using the `squash` strategy?

Yes. When the merge strategy is `squash`, you can set additional options under the
`options.squash` property, including how to render the commit body.

```yaml
merge:
  method: squash
  options:
    squash:
      body: summarize_commits # or `pull_request_body`, `empty_body`
```

You can also define part of pull request body to pick as a commit message when
`body` is `pull_request_body`.

```yaml
merge:
  method: squash
  options:
    squash:
      body: pull_request_body
      message_delimiter: ==COMMIT_MSG==
```

Anything that's contained between two `==COMMIT_MSG==` strings will become the
commit message instead of whole pull request body.

#### What if I don't want to put config files into each repo?

You can add default repository configuration in your bulldozer config file.

It will be used only when your repo config file does not exist.

```yaml
options:
  default_repository_config:
    ignore:
      labels: ["do not merge"] # or any other available config.
```

#### Bulldozer isn't merging my commit when it should, what could be happening?

Bulldozer will attempt to merge a branch whenever it passes the trigger/ignore
criteria. GitHub may prevent it from merging a branch in certain conditions, some of
which are to be expected, and others that may be caused by mis-configuring Bulldozer.

- Required status checks have not passed
- Review requirements are not satisfied
- The merge strategy configured in `.bulldozer.yml` is not allowed by your
  repository settings
- Branch protection rules are preventing `bulldozer[bot]` from [pushing to the
  branch](https://help.github.com/articles/about-branch-restrictions/). Github apps can be added to the list of restricted
  push users, so you can allow Bulldozer specifically for your repo.

#### Bulldozer isn't updating my branch when it should, what could be happening?

When using the branch update functionality, Bulldozer only acts when the target
branch is updated _after_ updates are enabled for the pull request. For
example:

1. User A opens a pull request targetting `develop`
2. User B pushes a commit to `develop`
3. User A adds the `update me` label to the first pull request
4. User C pushes a commit to `develop`
5. Bulldozer updates the pull request with the commits from Users B and C

Note that the update does _not_ happen when the `update me` label is added,
even though there is a new commit on `develop` that is not part of the pull
request.

#### Can Bulldozer work with push restrictions on branches?

As mentioned above, as of Github ~2.19.x, GitHub Apps _can_ be added to the list of users associated
with [push restrictions](https://help.github.com/articles/about-branch-restrictions/). If you don't want to do this, or if you're running
an older version of Github that doesn't support this behaviour, you may work
around this:

1. Use another app like [policy-bot](https://github.com/palantir/policy-bot) to
   implement _approval_ restrictions as required status checks instead of using
   push restrictions. This effectively limits who can push to a branch by
   requiring changes to go through the pull request process and be approved.
2. Configure Bulldozer to use a personal access token for a regular user to
   perform merges in this case. The token must have the `repo` scope and the
   user must be allowed to push to the branch. In the server configuration
   file, set:

```yaml
options:
  push_restriction_user_token: <token-value>
```

2. The token is _only_ used if the target branch has push restrictions enabled.
   All other merges are performed as the normal GitHub App user.

## Deployment

bulldozer is easy to deploy in your own environment as it has no dependencies
other than GitHub. It is also safe to run multiple instances of the server,
making it a good fit for container schedulers like Nomad or Kubernetes.

We provide both a Docker container and a binary distribution of the server:

- Binaries: [https://bintray.com/palantir/releases/bulldozer](https://bintray.com/palantir/releases/bulldozer)
- Docker Images: [https://hub.docker.com/r/palantirtechnologies/bulldozer/](https://hub.docker.com/r/palantirtechnologies/bulldozer/)

A sample configuration file is provided at `config/bulldozer.example.yml`.
Certain values may also be set by environment variables; these are noted in the
comments in the sample configuration file.

### GitHub App Configuration

To configure Bulldozer as a GitHub App, these general options are required:

- **Webhook URL**: `http(s)://<your-bulldozer-domain>/api/github/hook`
- **Webhook secret**: A random string that matches the value of the
  `github.app.webhook_secret` property in the server configuration

The app requires these permissions:

| Permission                | Access       | Reason                             |
| ------------------------- | ------------ | ---------------------------------- |
| Repository administration | Read-only    | Determine required status checks   |
| Checks                    | Read-only    | Read checks for ref                |
| Repository contents       | Read & write | Read configuration, perform merges |
| Issues                    | Read & write | Read comments, close linked issues |
| Repository metadata       | Read-only    | Basic repository data              |
| Pull requests             | Read & write | Merge and close pull requests      |
| Commit status             | Read-only    | Evaluate pull request status       |

The app should be subscribed to these events:

- Check run
- Commit comment
- Pull request
- Status
- Push
- Issue comment
- Pull request review
- Pull request review comment

### Operations

bulldozer uses [go-baseapp](https://github.com/palantir/go-baseapp) and
[go-githubapp](https://github.com/palantir/go-githubapp), both of which emit
standard metrics and structured log keys. Please see those projects for
details.

### Example Files

Example `.bulldozer.yml` files can be found in `[config/examples](https://github.com/palantir/bulldozer/tree/develop/config/examples)`

### Migrating: Version 0.4.X to 1.X

The server configuration for bulldozer allows you to specify `configuration_v0_path`, which is a list of paths
to check for `0.4.X` style bulldozer configuration. When a `1.X` style configuration file does not appear
at the configured path, bulldozer will attempt to read from the paths configured by `configuration_v0_path`,
converting the legacy configuration into an equivalent `v1` configuration internally.

The upgrade process is therefore to deploy the latest version of bulldozer with both `configuration_path` and
`configuration_v0_path` configured, and to enable the bulldozer GitHub App on all organizations where it was
previously installed.

## Development

To develop `bulldozer`, you will need a [Go installation](https://golang.org/doc/install).

**Run style checks and tests**

```
./godelw verify
```

**Running the server locally**

```
# copy and edit the server config
cp config/bulldozer.example.yml config/bulldozer.yml

./godelw run bulldozer server
```

- `config/bulldozer.yml` is used as the default configuration file
- The server is available at `http://localhost:8080/`

**Running the server via Docker**

```
# copy and edit the server config
cp config/bulldozer.example.yml config/bulldozer.yml

# build the docker image
./godelw docker build --verbose

docker run --rm -v "$(pwd)/config:/secrets/" -p 8080:8080 palantirtechnologies/bulldozer:latest
```

- This mounts the `config` directory (which should contain the `bulldozer.yml` configuration file) at the expected location
- The server is available at `http://localhost:8080/`

## Contributing

Contributions and issues are welcome. For new features or large contributions,
we prefer discussing the proposed change on a GitHub issue prior to a PR.

## License

This application is made available under the [Apache 2.0 License](http://www.apache.org/licenses/LICENSE-2.0).

# probot-auto-merge

![](https://travis-ci.org/bobvanderlinden/probot-auto-merge.svg?branch=master#crop=0&crop=0&crop=1&crop=1&height=20&id=aSSyK&originHeight=20&originWidth=90&originalType=binary&ratio=1&rotation=0&showTitle=false&status=done&style=none&title=&width=90)
![](https://img.shields.io/coveralls/github/bobvanderlinden/probot-auto-merge.svg#crop=0&crop=0&crop=1&crop=1&height=20&id=LDRWo&originHeight=20&originWidth=96&originalType=binary&ratio=1&rotation=0&showTitle=false&status=done&style=none&title=&width=96)

A GitHub App built with [Probot](https://github.com/probot/probot) that automatically merges PRs

>

## Usage

1. [Configure the GitHub App](https://github.com/apps/probot-auto-merge)
2. Create `.github/auto-merge.yml` in your repository.
3. Customize configuration to your needs. See below.

## Configuration

Configuration of `probot-auto-merge` is done through `.github/auto-merge.yml` in
your repository. An example of this file can be found [here](auto-merge.example.yml).
You can also see the configuration for this repository [here](.github/auto-merge.yml).

The configuration has values that serve as conditions on whether or not a pull request
should be automatically merged and also configuration about the merge itself. Values
that serve as conditions are annotated as such below.

All conditions must be met before a PR will be automatically merged. You can get more
flexibility by defining multiple rules. Rules can have multiple conditions and if any
of the conditions inside a rule are met, the PR is also merged. See [rules](#rules-default-none).

If the target branch is a protected branch, you must add `probot-auto-merge` bot to
the list of `People, teams or apps with push access` in your branch protection rules.

Note that the default configuration options are to do nothing. This is to prevent
implicit and possibly unintended behavior.

The configuration fields are as follows:

### `minApprovals` (required, condition)

The minimum number of reviews from each association that approve the pull request before
doing an automatic merge. For more information about associations see:
[https://developer.github.com/v4/enum/commentauthorassociation/](https://developer.github.com/v4/enum/commentauthorassociation/)

Possible associations: `OWNER`, `MEMBER`, `COLLABORATOR`, `CONTRIBUTOR`, `FIRST_TIMER`, `FIRST_TIME_CONTRIBUTOR`, `NONE`

In the example below when a pull request gets 2 approvals from owners, members or collaborators,
the automatic merge will continue.

```yaml
minApprovals:
  COLLABORATOR: 2
```

In the example below when a pull request gets 1 approval from an owner OR 2 approvals from members, the automatic merge will continue.

```yaml
minApprovals:
  OWNER: 1
  MEMBER: 2
```

### `requiredReviewers` (condition, default: none)

Whenever required reviewers are configured, pull requests will only be automatically
merged whenever all of these reviewers have approved the pull request.

In the example below, pull requests need to have been approved by the user 'rogerluan'
before they will be automatically merged.

```yaml
requiredReviewers:
  - rogerluan
```

### `maxRequestedChanges` (condition, default: none)

Similar to `minApprovals`, maxRequestedChanges determines the maximum number of
requested changes before a pull request will be blocked from being automatically
merged.

It yet again allows you to configure this per association.

Note that `maxRequestedChanges` takes precedence over `minApprovals`.

In the example below, automatic merges will be blocked when one of the owners, members
or collaborators has requested changes.

```yaml
maxRequestedChanges:
  COLLABORATOR: 0
```

In the example below, automatic merges will be blocked when the owner has
requested changes or two members, collaborators or other users have requested
changes.

```yaml
maxRequestedChanges:
  OWNER: 0
  NONE: 1
```

The default for this value is:

```yaml
maxRequestedChanges:
  NONE: 0
```

### `blockingBaseBranches` (condition, default: none)

Whenever blocking base branches are configured, pull requests will only be automatically
merged whenever their base branch (into which the PR would be merged) is not matching
the patterns listed.

In the example below, pull requests that have the base branch `develop` or one that starts
with `feature-` will not be merged automatically.

```yaml
blockingBaseBranches:
  - develop
  - regex: ^feature-
```

Note: remove the whole section when you're not using blocking base branches.

### `requiredBaseBranches` (condition, default: none)

Whenever required base branches are configured, pull requests will only be automatically
merged whenever their base branch (into which the PR would be merged) is matching
any of the patterns listed.

In the example below, pull requests need to have the base branch `master` or one that
starts with `v{number}` before they will be automatically merged.

```yaml
requiredBaseBranches:
  - master
  - regex: ^v\d
```

### `blockingLabels` (condition, default: none)

Blocking labels are the labels that can be attached to a pull request to make
sure the pull request is not being merged automatically.

In the example below, pull requests that have the `blocked` label will not be
merged automatically.

```yaml
blockingLabels:
  - blocked
```

The above example denotes literal label names. Regular expressions can be used to
partially match labels. This can be specified by the `regex:` property in the
configuration. The following example will block merging when a label is added that
starts with the text `blocked`:

```yaml
blockingLabels:
  - regex: ^blocked
```

Note: remove the whole section when you're not using blocking labels.

### `requiredLabels` (condition, default: none)

Whenever required labels are configured, pull requests will only be automatically
merged whenever all of these labels are attached to a pull request.

In the example below, pull requests need to have the label `merge` before they
will be automatically merged.

```yaml
requiredLabels:
  - merge
```

The above example denotes literal label names. Regular expressions can be used to
partially match labels. This requires `regex:` property in the configuration. The
following example will requires at least one label that starts with `merge`:

```yaml
requiredLabels:
  - regex: ^merge
```

Note: remove the whole section when you're not using required labels.

### `blockingTitleRegex` (condition, default: none)

Whenever a blocking title regular expression is configured, pull requests that have a title
matching the configured expression will not be automatically merged.

This is useful whenever pull requests with `WIP` in their title need to be skipped.

In the example below, pull requests with the word `wip` in the title will not be
automatically merged. This also includes `[wip]`, `WIP` or `[WIP]`, but not `swiping`:

```yaml
blockingTitleRegex: '\bWIP\b'
```

### `requiredTitleRegex` (condition, default: none)

Whenever a required title regular expression is configured, only pull requests that have a title
matching the configured expression will automatically be merged.

This is useful for forks, that can only create pull request text, no labels.

In the example below, pull requests with the title containing `MERGE` will be
automatically merged. This also includes This also includes `[merge]`, `MERGE` or `[MERGE]`, but not `submerge`:

```yaml
requiredTitleRegex: '\bMERGE\b'
```

### `blockingBodyRegex` (condition, default: none)

Whenever a blocking body regular expression is configured, pull requests that have a body
matching the configured expression will not be automatically merged.

This is useful whenever pull requests with a certain string in their body need to be skipped.

In the example below, pull requests with the body containing `do-not-merge` will not be
automatically merged. This also includes `labels: do-not-merge`, `LABELS: DO-NOT-MERGE` or `some more text, but do-not-merge`,
but not `do-not-merge-just-kidding`:

```yaml
blockingBodyRegex: '(^|\\s)do-not-merge($|\\s)'
```

### `requiredBodyRegex` (condition, default: none)

Whenever a required body regular expression is configured, only pull requests that have a body
matching the configured expression will automatically be merged.

This is useful for forks, that can only create pull request text, no labels.

In the example below, pull requests with the body containing `ok-to-merge` will be
automatically merged. This also includes `labels: ok-to-merge`, `LABELS: OK-TO-MERGE` or `some more text, but ok-to-merge`, but not `not-ok-to-merge`:

```yaml
requiredBodyRegex: '(^|\\s)ok-to-merge($|\\s)'
```

### `reportStatus` (default: `false`)

The status of the auto-merge process will be shown in each PR as a [check](https://help.github.com/articles/about-status-checks/). This can be especially useful to find out why a PR is not being merged automatically.

To enable status reporting, add the following to your configuration:

```yaml
reportStatus: true
```

### `updateBranch` (default: `false`)

Whether an out-of-date pull request is automatically updated.
It does so by merging its base on top of the head of the pull request.
This is similar to the behavior of the 'Update branch' button.

`updateBranch` is useful for repositories where protected branches are used
and the option _Require branches to be up to date before merging_ is enabled.

Note that this only works when the branch of the pull request resides in the same
repository as the pull request itself.

In the example below automatic updating of branches is enabled:

```yaml
updateBranch: true
```

### `deleteBranchAfterMerge` (default: `false`)

Whether the pull request branch is automatically deleted.
This is the equivalent of clicking the 'Delete branch' button shown on merged
pull requests.

Note that this only works when the branch of the pull request resides in the same
repository as the pull request itself.

In the example below automatic deletion of pull request branches is enabled:

```yaml
deleteBranchAfterMerge: true
```

### `mergeMethod` (default: `merge`)

In what way a pull request is merged. This can be:

- `merge`: creates a merge commit, combining the commits from the pull request on top of
  the base of the pull request (default)
- `rebase`: places the commits from the pull request individually on top of the base of the pull request
- `squash`: combines all changes from the pull request into a single commit and places the commit on top
  of the base of the pull request

For more information see [https://help.github.com/articles/about-pull-request-merges/](https://help.github.com/articles/about-pull-request-merges/)

```yaml
mergeMethod: merge
```

### `mergeCommitMessage` (default: none)

Optionally specify the merge commit message format. The following template tags
are supported:

- `{title}`: The pull request title at the moment it is merged
- `{body}`: The pull request body at the moment it is merged
- `{number}`: The pull request number
- `{branch}`: The name of the source branch
- `{commits}`: A list of merged commits

When this option is not set, the merge commit message is controlled by
GitHub and uses a combination of the title of the pull request when it was
opened (note that later changes to the title are ignored) and a list of
commits.

This settings is ignored when `mergeMethod` is set to `rebase`.

```yaml
mergeCommitMessage: |
  {title} (#{number})
  {body}
```

### `rules` (default: none)

Rules allow more flexibility configuring conditions for automatically merging. Each rule is defined by
multiple conditions. All conditions inside a rule must be met before a rule triggers a merge. Any of the
defined rules can trigger a merge individually.

An example of a configuration with 2 rules that will trigger a merge upon 1 approval from an owner _or_ a `merge` label:

```yaml
rules:
  - minApprovals:
      OWNER: 1
  - requiredLabels:
      - merge
```

This can be combined with conditions on global level, as the global conditions will take precedence. The following example will not trigger a merge when a PR has the `blocking` label, regardless what the rules say:

```yaml
blockingLabels:
  - blocking
rules:
  - minApprovals:
      OWNER: 1
  - requiredLabels:
      - merge
```

Note: remove the whole rules section when you're not using any rules.

### `requiredAuthorRole` (default: none)

Using the `requiredAuthorRole` condition you can specify conditions based on the role of the pull request author.
For instance, using `rules`, one can be more loose when the author is an owner, and more restrictive otherwise.

Here's an example of a configuration that requires acceptance of 2 owners or 1 owner if the other owner made the PR:

```yaml
rules:
  - requiredAuthorRole: OWNER
    minApprovals:
      OWNER: 1
  - minApprovals:
      OWNER: 2
```

## Development

### Setup

```shell
# Install dependencies
npm install

# Run typescript
npm run build
```

### Testing

```shell
npm run test
```

or during development:

```shell
npm run test:watch
```

### Running

See [https://probot.github.io/docs/development/#configuring-a-github-app](https://probot.github.io/docs/development/#configuring-a-github-app)

```shell
npm run build && npm run dev
```

### Running on Docker

This will build and run the app on a container called `probot-auto-merge`:

```shell
npm run docker
```

To just build the container image:

```shell
npm run docker:build
```

To run the built image:

```shell
npm run docker:run
```

### Running the linter

This will run the linter, pointing out the infractions, but it won't fix them automatically.

```shell
npm run lint
```

## Deployment

To deploy `probot-auto-merge` yourself, please follow [the guidelines defined by Probot on deploying GitHub applications](https://probot.github.io/docs/deployment/).

The permissions and events needed for the app to function can be found below.

### Permissions

- Administration: Read-only
- Checks: Read & write
- Contents: Read & write
- Issues: Read & write
- Metadata: Read-only
- Pull requests: Read & write
- Commit statuses: Read-only
- Members: Read-only

### Events

- Check run
- Check suite
- Label
- Pull request
- Pull request review
- Pull request review comment
- Status

## Contributing

If you have suggestions for how `probot-auto-merge` could be improved, or want to report a bug, open an issue! We'd love all and any contributions.

For more, check out the [Contributing Guide](CONTRIBUTING.md).

## License

[ISC](LICENSE) © 2018 Bob van der Linden [bobvanderlinden@gmail.com](mailto:bobvanderlinden@gmail.com) ([https://github.com/bobvanderlinden/probot-auto-merge](https://github.com/bobvanderlinden/probot-auto-merge))

# auto-label-merge-conflicts

> A Github action to auto-label PRs with merge conflicts

## Purpose

This action checks all open Pull Requests for merge conflicts and marks them with a Github label.

![](./demo.png#crop=0&crop=0&crop=1&crop=1&id=IgY1W&originalType=binary&ratio=1&rotation=0&showTitle=false&status=done&style=none&title=)

Once a conflict is resolved the label is automatically removed.

The typical use case is to run this action post merge (e.g. push to `master`) to quickly see which other PRs are now in conflict.

We use this setup e.g. on our monorepo at [Comtravo](https://github.com/comtravo). Instead of a grumpy CTO pinging developers to fix their merge conflicts there's now a shiny bot.

## Set up

To configure the action on your repo you have to do 2 things:

1. pick a Github label that should be used to mark PRs with conflicts

This label will then be managed by this action. It will be added to PRs with merge conflicts and removed from PRs without conflicts.

2. configure the new workflow by creating a YML config file in your `.github/workflows` folder:

```yaml
on:
  push:
    branches:
      - master
jobs:
  triage:
    runs-on: ubuntu-latest
    steps:
      - uses: mschilde/auto-label-merge-conflicts@master
        with:
          CONFLICT_LABEL_NAME: "has conflicts"
          GITHUB_TOKEN: ${{ secrets.GITHUB_TOKEN }}
          MAX_RETRIES: 5
          WAIT_MS: 5000
```

The label from step 1 should be referenced in the parameter `CONFLICT_LABEL_NAME`

Take a look at [this repo](https://github.com/mschilde/auto-label-merge-conflicts/blob/master/%2Egithub/workflows/label_merge_conflicts.yml) for an example setup.

### Arguments:

- MAX_RETRIES: optional (default 5)
- WAIT_MS: optional (default 5000)

## Limitations

Github does not reliably compute the `mergeable` status which is used by this action to detect merge conflicts.

If `master` changes the mergeable status is unknown until someone (most likely this action) requests it. [Github then tries to compute the status with an async job.](https://stackoverflow.com/a/30620973)

This is usually quick and simple, but there are no guarantees and Github might have issues.
You can tweak `MAX_RETRIES` and `WAIT_MS` to increase the timeout before giving up on a Pull Request.

## Local dev setup

To play around with the code base, you need `Docker` and `make` set up locally.

Run `make build`, `make develop`, then `yarn install`.

# How to use PR Valet

Step 1: Install [PR Valet](https://github.com/marketplace/pr-valet).
Step 2: Add the `valet:merge` label to your pull request.
Step 3: Work on your other tasks while PR Valet takes care of merging your pull request.

# [https://docs.mergify.io/](https://docs.mergify.io/)

# [https://snyk.io/](https://snyk.io/)
