<h1><centre>CTFs</centre></h1>

<h2> CTF - myBlogs </h2>

<p><b>Description</b>: Simple Blog page, to render files on the web page... </p>
<b> Task </b>:flag.txt file is stored along with other blog files, hope you can see it content...<br>
Reference : https://portswigger.net/research/server-side-template-injection <br>
<b> Walkthrough </b>: Coming Soon <br> 

<h2> Environment Setup </h2>
1 Install docker.io in your machine

for debian based linux:

> apt-get install docker.io

for windows:

follow the documentation: https://docs.docker.com/desktop/windows/install/

2 Pull the lab

> docker pull hackpeas/myblogs-lfi-lab1

![](image1.png)

confirm that image is successfully pulled, with the following command

> docker images

![](image2.png)

You can see the image hackpeas/myblogs-lfi-lab1

3 Running the image

> docker run -p 1234:1234 hackpeas/myblogs-lfi-lab1

![](image3.png)

Now you can access the web application by visiting the url.

![](image4.png)

Note: you can check the vulnerable source code in this repo.

