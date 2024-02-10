# Plant Care Taker (plantSens)
#### Project name: plantSens
#### This is the Plant Care Taker Portfolio project for ALX/Holbertoon.

#### Description yet to come.

This project is processing mock data (Can easly be changed to real one {comes from hardware}).
Using a specific algorithm  that changes based on the plant type, this system decies when to water the plant
and how much water it gives alongside with the duration and the repetation time frame.

#### This project has two interfaces:

##### User interface:
     a user with a registered acoount can log in and manage his equipments.
      -> a user buys the equipments (sensors and wattering modules)
      -> then the user installs them in his planting envirenment based on the documentaion (Docs will be availabe in the client web interface), this includes the installation of IOT router (This can be done as well by one of our spetialists).
      -> after that the user registers an account in our domain name with his creds, he will be asked to register the modules he purchesed so he or the system can control them.
      -> the user interface provides a simple way to control and monitor various parts of the system.
      -> the user will be notified on multiple occusions (Data change(if something goes wrong...), Action taken(wattering ...))
      -> the user will have an option to let the system decides when it carries it's OPS or if he will take care of it manually, this can be changes any time via the user interface.
     -> more to come ...

##### API:
      This is used by the system to communicate with the devices the user has registered (using IOT router),
     and it's used to send instruction to other models in the user equipments after the system is done processing the
     initial request.


#### The system Gathers Data from this outside resources:
     plants types and Data : https://trefle.io/api/v1/plant + ?token=dS-iDECwBL_2d4s9v7ZdJvCvDP3u_GovzqejfPJ7f6Y
    (It's a good idea to cache the results of this api calls, in case this API endpoint goes down).

     -> mock data base.

#### Very important notes:
      -> after the system waters the plants, the soil_humidity variable shoud go up to the default hight value, and then decreases by the time, until the soil_humidity defaule low value (this means the plant is low on water) is reached then the system will water the plant again and sends a call that turns back the mock data to soil_humidity default high value (this means the plant is watered), so mock data for soil_humidity needs to be changes after every wattering (soil_humidity value goes up), and after a period of time (example = 20Hours 30 mins (this is based on the plant)) the mock data for soil_humidity need to decrease to the lower value again, and this forward every cycle.

* I guess this is the only note for now in terms of the mock data.

* The User Interface could be simple for the first MVP presentation (Week 3), but we will implement user Authentication and a nice view later (befour week 5) using vite react front-end frameworks.
#### Tech stack:
      front-end: vite react (React JS)
      back-end: Python (flask framework)
                Database: Mysql / PostgreSQL
                Business logic: Python
                API: Python (flask endpoints)
#### Project structure:
      flask_backend |
                    |- api/ |
                            |- v1/ |
                                   |- __init__.py
                                   |- app.py (the python model for app)
                                   |- views/|
                                            |- __init__.py
                                            |- index.py (contains the views model)
                    |- models/ |
                               | - __init__.py (makes this a package)
                               | - engine/ (handles Database storage)
      vite_frontend |
                    | - well a lot is in here but just front-end stuff (weill be updated later)
#### Development specs:
      requirements: Python3 >= 3.4 + flask package + requests package (see more in the required pacakges or dependencies section)
                    node >= 18.04
                    npm >= 10.0.2
      ports: This project is being developed on a windows machine with WSL2, so the host for both ends (back, front) is 'http://wsl.localhost'.
             front-end interface is listening on port: 5173
             back-end API interface is listening on port: 5000
#### Python required pacakges (Dependencies):
      SQLAlchemy                >=1.4.0
      requests                  >=2.31.0
      Flask                     >=2.1.0
      Flask-Cors                >=4.0.0
      appdirs                   >=1.4.4
#### Npm required pacakges (Frontend dependencies):
      axios                     >=axios@1.6.7 //this handles html calls, instead of fetch().
#### To run this project services:
     For back end API, at the back-end project folder (~plantSens/flask_backend: ) run: python3 -m api.v1.app # this runs the app model API.
     For front end, at the front-end project folder (~plantSens/vite_frontend/ ) run: npm run dev # this will start a development server.
