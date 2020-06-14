import axios from 'axios'

const _getFileToDownload = (apiUrl) => {
    // https://stackoverflow.com/a/57164151/4386191
    return axios.get(apiUrl, {
        responseType: 'arraybuffer',
        headers: {
            'Content-Type': 'application/json'
        }
    })
}

const _URL = "http://0.0.0.0:4444"

const download = (bits, num_problems) => {
    const url = `${_URL}/?bits=${bits}&num_problems=${num_problems}`
    _getFileToDownload(url)
        .then(response => {
            const type = response.headers['content-type']
            const blob = new Blob([response.data], {type: type, encoding: 'UTF-8'})
            const link = document.createElement('a')
            link.href = window.URL.createObjectURL(blob)
            link.download = 'a.zip'
            link.click()
        })
}


export default download
