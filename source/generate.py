import re
import urllib
import requests

sitemap = 'https://blog.ccknbc.cc/sitemap.xml'

html = urllib.request.urlopen(sitemap).read().decode('utf-8')
result = re.findall(re.compile(r'(?<=<loc>).*?(?=</loc>)'), html)

with open('urls.txt', 'w') as file:
  for data in result:
    print(data, file=file)
file.close()
