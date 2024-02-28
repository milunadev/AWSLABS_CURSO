FROM centos
	
RUN cd /etc/yum.repos.d/ \
      && sed -i 's/mirrorlist/#mirrorlist/g' /etc/yum.repos.d/CentOS-* \
      && sed -i 's|#baseurl=http://mirror.centos.org|baseurl=http://vault.centos.org|g' /etc/yum.repos.d/CentOS-*

RUN rpm -Uvh https://dl.fedoraproject.org/pub/epel/epel-release-latest-8.noarch.rpm \
      && yum update -y \
      && yum -y install python3-pip \
      && pip3 install flask

COPY . /src

EXPOSE 8080

CMD cd /src && python3 home.py