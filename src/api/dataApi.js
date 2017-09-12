/**
 * Created by rabby on 22/08/17.
 */
class dataApi {
    constructor() {

    }

    static login(usr) {
        let userData = {id: "1", username: "rr", password: "rr", addressList: [{id: "1", name: "friend1", currentAddress:"address1"},{id: "2", name: "friend2",currentAddress:"address2"}]};

        const request = new Request('http://localhost:3000/user/authenticate',{
            method: 'POST',
            headers: new Headers({
                'Content-Type': 'application/json'
            }),
            body: JSON.stringify({ username: usr.username, password : usr.password})
        });

        return fetch(request).then(response => {
             console.log("login response......");
            console.log(response);
            return response.json();
        }).catch(error => {
            return error;
        });



       /* let myFirstPromise = new Promise((resolve, reject) => {
            setTimeout(function () {
                return(resolve(userData)); // Yay! Everything went well!
            }, 250);
        });

        return myFirstPromise;*/

       /* myFirstPromise.then(() => {
            return (this.userData);
            /*
        });
        */
    }


    static register(usr) {
       // let userData = {id: "1", username: "rr", password: "rr", addressList: [{id: "1", name: "friend1", currentAddress:"address1"},{id: "2", name: "friend2",currentAddress:"address2"}]};

        const request = new Request('http://localhost:3000/user/adduser',{
            method: 'POST',
            headers: new Headers({
                'Content-Type': 'application/json'
            }),
            body: JSON.stringify({username: usr.username, password : usr.password,email: usr.email})
        });

        return fetch(request).then(response => {
            console.log(" register user response......");
            console.log(response);
            return response.json();
        }).catch(error => {
            return error;
        });
    }


      static getGlobalFeed() {
       // let userData = {id: "1", username: "rr", password: "rr", addressList: [{id: "1", name: "friend1", currentAddress:"address1"},{id: "2", name: "friend2",currentAddress:"address2"}]};

        const request = new Request('http://localhost:3000/getglobalfeed',{
            method: 'GET',
            headers: new Headers({
                'Content-Type': 'application/json'
            })
        });

        return fetch(request).then(response => {
            console.log(" get global feed response......");
            console.log(response);
            return response.json();
        }).catch(error => {
            return error;
        });
    }


     static getYourFeed(usr) {
       // let userData = {id: "1", username: "rr", password: "rr", addressList: [{id: "1", name: "friend1", currentAddress:"address1"},{id: "2", name: "friend2",currentAddress:"address2"}]};

        const request = new Request('http://localhost:3000/getyourfeed',{
            method: 'POST',
            headers: new Headers({
                'Content-Type': 'application/json'
            }),
            body: JSON.stringify({userid: usr._id})
        });

        return fetch(request).then(response => {
            console.log(" get Your Feed response......");
            console.log(response);
            return response.json();
        }).catch(error => {
            return error;
        });
    }




    static addAddress(usr) {
        let userData = {id: "1", username: "rr", password: "rr", addressList: [{id: "1", name: "friend1", currentAddress:"address1"},{id: "2", name: "friend2",currentAddress:"address2"}]};

        const request = new Request('http://localhost:3000/addaddress',{
            method: 'POST',
            headers: new Headers({
                'Content-Type': 'application/json'
            }),
            body: JSON.stringify({loginid :usr.loginId, name: usr.name, currentaddress : usr.currentAddress})
        });

        return fetch(request).then(response => {

            //console.log(response);
            return response.json();
        }).catch(error => {
            return error;
        });

    }

    static updateAddress(usr) {
        console.log("update addresss............1111");
        console.log(usr);

        const request = new Request('http://localhost:3000/updateaddress',{
            method: 'POST',
            headers: new Headers({
                'Content-Type': 'application/json'
            }),
            body: JSON.stringify({loginid :usr.loginId,addressid: usr.id, name: usr.name, currentaddress : usr.currentAddress})
        });

        return fetch(request).then(response => {

            //console.log(response);
            return response.json();
        }).catch(error => {
            return error;
        });

    }

    static deleteAddress(usr) {
        console.log("delete addresss............1111");
        console.log(usr);

        const request = new Request('http://localhost:3000/removeaddress',{
            method: 'POST',
            headers: new Headers({
                'Content-Type': 'application/json'
            }),
            body: JSON.stringify({loginid :usr.loginId,addressid: usr.addressId})
        });

        return fetch(request).then(response => {

            //console.log(response);
            return response.json();
        }).catch(error => {
            return error;
        });

    }
}

export default dataApi;


