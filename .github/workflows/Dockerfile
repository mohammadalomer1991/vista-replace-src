# 1. Start from an official Node.js image
FROM node:18-slim

# 2. Set the working directory inside the container
WORKDIR /app

# 3. Install AWS CLI (often needed for CDK to authenticate)
# We need to install 'unzip' and 'curl' first to get it
RUN apt-get update && apt-get install -y curl unzip && \
    curl "https://awscli.amazonaws.com/awscli-exe-linux-x86_64.zip" -o "awscliv2.zip" && \
    unzip awscliv2.zip && \
    ./aws/install && \
    rm -rf awscliv2.zip aws

# 4. Install the AWS CDK toolkit globally in the container
RUN npm install -g aws-cdk

# 5. Copy your project's dependency file
COPY package.json ./
COPY package-lock.json ./

# 6. Install your project's dependencies
RUN npm install

# 7. Copy the rest of your CDK project code into the container
COPY . .

# 8. Set the default command for the container.依存対策
# This is what runs when your workflow executes "docker run --rm vista-replace-src"
CMD ["npx", "cdk", "synth"]