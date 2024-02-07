# Plant Care Taker

#### This is the Plant Care Taker Portfolio project for ALX/Holbertoon.

#### Description yet to come.

This project is processing mock data (Can easly be changed to real one {comes from hardware}).
Using a specific algorithm  that changes based on the plant type, this system decies when to water the plant
and how much water it gives alongside with the duration and the repetation time frame.

#### This project has two interfaces:

#### User interface:
     * a user with a registered acoount can log in and manage his equipments.
     * -> a user buys the equipments (sensors and wattering modules)
     * -> then the user installs them in his planting envirenment based on the documentaion (Doc will be availabe in the client web interface), this includes the installation of IOT router (This can be done as well by one of our spetialists).
     * -> after that the user registers an account in our domain name with his creds, he will be asked to register the models he purchesed so he or the system can control them.
     * -> the user interface provides a simple way to control and monitor various parts of the system.
     * -> the user will be notified on multiple occusions (Data change(if something goes wrong...), Action taken(wattering ...))
     * -> the user will have an option to let the system decides when it carries it's OPS or if he will take care of it manually, this can be changes any time via the user interface.
     -> more to come ...
     
#### API:
     * This is used by the system to communicate with the devices the user has registered (using IOT router),
     and it's used to send instruction to other models in the user equipments after the system is done processing the
     initial request.


#### The system Gathers Data from this outside resources:
    * plants types and Data : https://trefle.io/api/v1/plant + ?token=dS-iDECwBL_2d4s9v7ZdJvCvDP3u_GovzqejfPJ7f6Y
    (It's a good idea to cache the results of this api calls, in case this API endpoint goes down).

    * -> mock data base.

#### Very important notes:
     * -> after the system waters the plants, the soil_humidity variable shoud go up to the default hight value, and then decreases by the time, until the soil_humidity defaule low value (this means the plant is low on water) is reached then the system will water the plant again and sends a call that turns back the mock data to soil_humidity default high value (this means the plant is watered), so mock data for soil_humidity needs to be changes after every wattering (soil_humidity value goes up), and after a period of time (example = 20Hours 30 mins (this is based on the plant)) the mock data for soil_humidity need to decrease to the lower value again, and this forward every cycle.

* I guess this is the only note for now in terms of the mock data.

* The User Interface could be simple for the first MVP presentation (Week 3), but we will implement user Authentication and a nice view later (befour week 5) using one of the widely available fron-ent frameworks.