module.exports = (function () {
    const config = {
        validation: {
            "apiKey": "23567b218376f79d9415"
        },
        url: 'http://interview.agileengine.com',
    };

    async function initValidation() {
        try {
            const response = await fetch(`${config.url}/auth`, {
                method: 'post',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(config.validation),
            });
            const data = await response.json();
            if(data.status == 'Unauthorized' || data.status == 'Not found' && response.status != 200) {
                alert('Something goes wrong!')
                location.reload();
            } else {
                return data;
            }
        } catch (err) {
            console.log(err);
        }
    }

    async function getImagesByPage(token,page=1) {
        try {
            const response = await fetch(`${config.url}/images?page=${page}`, {
                method: 'get',
                headers: {
                    'Authorization': `Bearer ${token}`
                }
            });
            const data = await response.json();
            if(data.status == 'Unauthorized' || data.status == 'Not found' && response.status != 200) {
                alert('Something goes wrong!')
                location.reload();
            } else {
                return data;
            }
        } catch (err) {
            console.log(err);
        }
    }

    async function getImagesById(token,id=null) {
        try {
            const response = await fetch(`${config.url}/images/${id}`, {
                method: 'get',
                headers: {
                    'Authorization': `Bearer ${token}`
                }
            });
            const data = await response.json();
            if(data.status == 'Unauthorized' || data.status == 'Not found' && response.status != 200) {
                alert('Something goes wrong!')
                location.reload();
            } else {
                return data;
            }
        } catch (err) {
            console.log(err)
        }
    }

    return {
        initValidation,
        getImagesByPage,
        getImagesById,
    }
})();
