node {
  try {
    stage('Checkout') {
      checkout scm
    }
    stage('Environment') {
      sh 'git --version'
      echo "Branch: ${env.BRANCH_NAME}"
      sh 'git pull' ${env.BRANCH_NAME}
    }

  }
  catch (err) {
    throw err
  }
}