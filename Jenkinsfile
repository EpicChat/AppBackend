pipeline {
    agent any

    environment {
        DOCKER_IMAGE = 'epic-chat/app-backend:latest'
    }

    stages {
        stage('Checkout') {
            steps {
                echo 'checkouting...'
                checkout scm
            }
        }

        stage('Build') {
            steps {
                  nodejs(nodeJSInstallationName: 'NodeJs 18') {
                    sh 'npm install'
                    sh 'npm run build'
                  }
            }
        }

        stage('Docker Build') {
            steps { 
                script {
                    sh "docker build -t $DOCKER_IMAGE ."
                }
            }
        }

        stage('Run Application') {
            steps {
                script {
                    sh 'docker stop epic-chat-backend || true'
                    sh 'docker rm epic-chat-backend || true'

                    sh "docker run -d --name=epic-chat-backend -p 3002:3002 --hostname=app-backend --network=global_network $DOCKER_IMAGE"
                }
            }
        }
    }
}
