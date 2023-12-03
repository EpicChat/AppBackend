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
                  nodejs(nodeJSInstallationName: 'NodeJs 18', configId: '<config-file-provider-id>') {
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
                    // Certifique-se de parar e remover um container anterior, se existir
                    sh 'docker stop epic-chat-backend || true'
                    sh 'docker rm epic-chat-backend || true'

                    // Execute a aplicação no novo container
                    sh "docker run -d --name=epic-chat-backend -p 3000:3000 $DOCKER_IMAGE"
                }
            }
        }
    }

    post {
        always {
            // Limpeza: Remova o container se a construção ou execução falhar
            sh 'docker stop epic-chat-backend || true'
            sh 'docker rm epic-chat-backend || true'
        }
    }
}
