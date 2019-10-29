node {
  try {
    stage('Checkout') {
      checkout scm
    }
    stage('Environment') {
      sh 'git --version'
      echo "Branch: ${env.BRANCH_NAME}"
      sh 'docker -v'
      sh 'printenv'
    }
    stage('build docker test file') {
      if (env.BRANCH_NAME == 'jhd/dev/test'){
        steps{
          sh 'docker build -t app-test -f Dockerfile.test --no-cache . '
        }
      }
    }
    stage('Docker build'){
      sh 'docker-compose -f docker-compose.yml up -d'
    } 
  }
  catch (err) {
    throw err
  }
}