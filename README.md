# 🗺️ Build a Map with React Leaflet - LaunchTime

### Environment Requirements

There are only a few things that are probably considered "strict" requirements for the workshop:

- [node](https://nodejs.org/en/)
- [git](https://git-scm.com/)
- Optional: [yarn](https://yarnpkg.com/) (or npm via node)

If you can run `yarn -v` or `npm -v`, you should be good to go.

### Setting Up the Project

Once you verified you have all of the environment requirements, we can get started by cloning this repository.

- Navigate to the folder you'd like to work in
- Run:

```
git clone https://github.com/yushanwebdev/launchtime-workshop
cd launchtime-workshop
```

All of the lessons are contained in their own individual directory within the lessons folder.

For each lesson, you can start from scratch by navigating to that lesson's directory and running:

```
yarn install
# or
npm install
```

This will install all of the required dependencies to get started for the lesson.

### Starting Up the Project

After all of the dependencies are installed for the lesson, you should be good to go!

- Run:

```
yarn develop # or npm run develop
```

This should kick off a new server available at http://localhost:3000 and most likely open that page for you.

If you've successfully started up your development server, you should be ready to go for the workshop!

### What's In This Project?

We'll start off our project with [Create React App](https://create-react-app.dev/) which will help us focus on learning to work with maps. CRA is an easy to use framework that uses [React](https://reactjs.org/) that helps us quickly build a new website or application.

I've also pre-configured some shared assets so that some of our changes can follow with us the entire way through the lessons.

## 🖥 The Workshop

### Lessons Structure

Each lesson is broken out into it's own directory under the lessons folder. Each contain's its own set of dependencies (though most are the same) as well as its own project code that we'll use to work through the exercise.

You'll find a README.md at the top of each lesson. This will give you an overview and instructions for that particular lesson as well as what files you'll need to work through.

As you're working through the lesson, you can use designated keys to find locations in the code where changes should be made. These keys can be used by searching for them in your code editor. The keys available are:

- `@lesson-##-todo`
- `@lesson-##-answer`

For example, if we want to find all of the spots where we should be working for lesson 2, we can use the `@lesson-02-todo` key to find those files and locations.

### Lesson Plan

- 00 - Introduction
- [01 - A Little Overview About Maps](https://github.com/colbyfayock/launchtime-workshop/tree/master/lessons/01%20-%20A%20Little%20Overview%20About%20Maps)
- [02 - Adding Your First React Leaflet Map to a New React Application](https://github.com/colbyfayock/launchtime-workshop/tree/master/lessons/02%20-%20Adding%20Your%20First%20React%20Leaflet%20Map%20to%20a%20New%20React%20Application)
- [03 - Customizing Your React Leaflet Map with a Mapbox Basemap Style](https://github.com/colbyfayock/launchtime-workshop/tree/master/lessons/03%20-%20Customizing%20Your%20React%20Leaflet%20Map%20with%20a%20Mapbox%20Basemap%20Style)
- [04 - Adding a Marker to a Map to Point to a Location with React Leaflet](https://github.com/colbyfayock/launchtime-workshop/tree/master/lessons/04%20-%20Adding%20a%20Marker%20to%20a%20Map%20to%20Point%20to%20a%20Location%20with%20React%20Leaflet)
- [05 - Managing Leaflet State in a React App with Hooks](https://github.com/colbyfayock/launchtime-workshop/tree/master/lessons/05%20-%20Managing%20Leaflet%20State%20in%20a%20React%20App%20with%20Hooks)
- [06 - Create Your First GeoJSON Document and Add Your Favorite Restaurant Locations to the Map](https://github.com/colbyfayock/launchtime-workshop/tree/master/lessons/06%20-%20Create%20Your%20First%20GeoJSON%20Document%20and%20Add%20Your%20Favorite%20Restaurant%20Locations%20to%20the%20Map)
- [07 - Add Restaurant Info to Your GeoJSON Document and Display It in a Tooltip on the Map](https://github.com/colbyfayock/launchtime-workshop/tree/master/lessons/07%20-%20Add%20Restaurant%20Info%20to%20Your%20GeoJSON%20Document%20and%20Display%20It%20in%20a%20Tooltip%20on%20the%20Map)
- [08 - Add Restaurant Delivery Zones to Map with Shaded Regions](https://github.com/colbyfayock/launchtime-workshop/tree/master/lessons/08%20-%20Add%20Restaurant%20Delivery%20Zones%20to%20Map%20with%20Shaded%20Regions)
- [09 - Customize Restaurant Location Markers with Custom Images](https://github.com/colbyfayock/launchtime-workshop/tree/master/lessons/09%20-%20Customize%20Restaurant%20Location%20Markers%20with%20Custom%20Images)
- [10 - Use Leaflet's Geolocation API to Find Locations Near you](https://github.com/colbyfayock/launchtime-workshop/tree/master/lessons/10%20-%20Use%20Leaflet's%20Geolocation%20API%20to%20Find%20Locations%20Near%20you)

### Credits

A huge thanks to [Colby Fayock](https://github.com/colbyfayock) for creating such valuable content as this.
