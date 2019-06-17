# LICENSE UPL 1.0
#
# Copyright (c) 2014, 2019, Oracle and/or its affiliates. All rights reserved.
#
# ORACLE DOCKERFILES PROJECT
# --------------------------
#
# Dockerfile template for Oracle Instant Client
#
# HOW TO BUILD THIS IMAGE
# -----------------------
#
# Run:
#      $ docker build -t oracle/instantclient:19 .
#
# Note Instant Client 19 automatically configures the global library
# search path to include Instant Client libraries.
#
FROM oraclelinux:7-slim

ARG release=18
ARG update=3

RUN  yum -y install oracle-release-el7 && yum-config-manager --enable ol7_oracle_instantclient && \
     yum -y install oracle-instantclient${release}.${update}-basic oracle-instantclient${release}.${update}-devel oracle-instantclient${release}.${update}-sqlplus && \
     rm -rf /var/cache/yum

RUN mkdir -p /usr/src/app

# Create app directory
WORKDIR /usr/src/app


# for details on the commands below, see http://yum.oracle.com/oracle-linux-nodejs.html

# install node runtime and npm
RUN yum install -y oracle-nodejs-release-el7 oracle-release-el7

# oracledb libraries for connectivity via node
RUN yum install -y node-oracledb-node10 

# set up environment
RUN sh -c "echo /usr/lib/oracle/18.3/client64/lib > /etc/ld.so.conf.d/oracle-instantclient.conf"
RUN ldconfig

# Install app dependencies
# A wildcard is used to ensure both package.json AND package-lock.json are copied
# where available (npm@5+)
COPY package*.json /usr/src/app/

# add all application dependancies
RUN npm install

# If you are building your code for production
# RUN npm ci --only=production

# Install Fn
# RUN curl -LSs https://raw.githubusercontent.com/fnproject/cli/master/install | sh

# Bundle app source
COPY . /usr/src/app

# Put a copy of the instant client config for connecting to
# the database in the container (in the default instant client config location).
# The source path(first argument) must be a path relative to this dockerfile
# this can be changed here or overridden by calling docker build with a
# build argument e.g. "docker build --build-arg PATH_TO_WALLET='../other/path' ."
COPY ./wallet/* /usr/lib/oracle/19.3/client64/lib/network/admin/

# Uncomment if the tools package is added
# ENV PATH=$PATH:/usr/lib/oracle/${release}.${update}/client64/bin

# open port 5000 on the container
#EXPOSE 5000
#EXPOSE 8080

# add a user to run fn
#RUN addgroup -g 1000 -S fn && adduser -S -u 1000 -G fn fn

# run the application in the container
#CMD [ "/usr/local/bin/fn", "start" ]