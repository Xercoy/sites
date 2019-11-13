blogPostsJsonString = `{
    "Posts": [
        {
            "title": "Promoting the Quality and Collaboration of Your Open Source Project",
            "accolade": "Featured as part of the Golang Academy Advent Calendar 2016",
            "link": "https://blog.gopheracademy.com/advent-2016/promoting-the-quality-and-collaboration-of-your-open-source-project/",
            "description": "So your open source project is on GitHub. It has tests, an awesome logo, probably a few stars, and maybe even a few other contributors. To spread awareness, it might be shared on the relevant subreddit, Twitter, Hacker News, etc. While exposure is one of the most effective ways to promote a project, there are various steps that can be taken to ensure that its growth is positive and that the community it revolves around thrives.",
            "date": "December 28th, 2016"
        },
        {
            "title": "Randomize the Elements of a Byte Slice in One Line",
            "accolade": "Featured in the Go Newsletter",
            "link": "https://medium.com/@corey.prak/randomize-the-elements-of-a-byte-slice-in-one-line-42e04ae21f47",
            "description": "The release notes for Go 1.6 includes the addition of a function to the math/rand package which populates a slice of bytes with random values. This function is noticeably faster than iteration. For cryptographic settings, the crypto/rand package is recommended.",
            "date": "July 8th, 2016"
        },
                {
            "title": "A Better Way of Handling Stdin",
            "accolade": "",
            "link": "http://learngowith.me/a-better-way-of-handling-stdin/",
            "description": "An insight into handling stdin when writing programs.",
            "date": "July 13th, 2016"
        },
        {
            "title": "Go's Time Package in a few Minutes",
            "accolade": "Featured in the Go Newsletter",
            "link": "http://learngowith.me/the-time-package-in-a-few-minutes/",
            "description": "A primer on the Time package.",
            "date": "December 28th, 2015"
        }
    ]
    }`;

jsonString = `{
    "Projects": [
        {
            "name": "Golang Recipes",
            "link": "http://golang.recipes",
            "description": "A list of recipes in Go.",
            "image": "./icons/golangrecipes.png",
            "github": "https://github.com/Xercoy/Golang-Recipes",
            "pizazz": "100% programmed in Go"
        },
        {
            "name": "Leap",
            "link": "http://github.com/xercoy/leap",
            "description": "Easily change directory through the use of aliased paths",
            "image": "./icons/leap.png",
            "github": "https://github.com/Xercoy/leap",
            "pizazz": "Created this tool to solve a problem I had."
        },
        {
            "name": "Blobs",
            "link": "http://github.com/xercoy/blobs",
            "description": "Create files of various sizes and types",
            "image": "./icons/blobs.png",
            "github": "https://github.com/Xercoy/blobs",
            "pizazz": "100% in Go, I created a logo, gitter chat channel, coverall support, documentation, has a ton of badges, also an awesome logo"
        },
        {
            "name": "Learn Go With Me",
            "link": "http://learngowith.me",
            "description": "Blog of my experiences in Go.",
            "image": "./icons/learngowithme.png",
            "github": "https://github.com/Xercoy/learn-go-with-me",
            "pizazz": "Contains all of the blog posts and code examples from my blog."
        },
        {
            "name": "You So Salty",
            "link": "http://yousosalty.io",
            "description": "Randomized Giphy image of the phrase salty",
            "image": "./icons/yousosalty.png",
            "github": "https://github.com/Xercoy/yousosalty",
            "pizazz": "100% Go"
        },
        {
            "name": "Yes or No?",
            "link": "http://yesorno.link",
            "description": "Ask the super fast and efficient Golang server for the answer to your biggest questions!",
            "image": "./icons/yesorno.png",
            "github": "https://github.com/Xercoy/yon",
            "pizazz": "REST API backend which is consumed by a Front End powered by Vue.js"
        },
        {
            "name": "Go 101",
            "link": "http://github.com/xercoy/go_101",
            "description": "Programming Puzzles complete in Go",
            "image": "./icons/go101.png",
            "github": "https://github.com/Xercoy/Go_101",
            "pizazz": "Created about three years ago, I completed these 101 programs in C"
        }
    ]
}`;
/*
jsonString = `{
    "Projects": [
        {
            "name": "Golang Recipes",
            "link": "http://golang.recipes",
            "description": "A list of recipes in Go.",
            "image": "https://d30y9cdsu7xlg0.cloudfront.net/png/85269-200.png"
        },
        {
            "name": "Devposts.io",
            "link": "http://devposts.io",
            "description": "A blog for the little things I always have to Google.",
            "image": "https://d30y9cdsu7xlg0.cloudfront.net/png/612754-200.png"
        },
        {
            "name": "By Land, Air, Sea, and WiFi",
            "link": "http://travel.coreyprak.org",
            "description": "My personal travel blog",
            "image": "https://d30y9cdsu7xlg0.cloudfront.net/png/612754-200.png"
        },
        {
            "name": "You So Salty",
            "link": "http://yousosalty.io",
            "description": "Randomized Giphy image of the phrase salty",
            "image": "https://d30y9cdsu7xlg0.cloudfront.net/png/692148-200.png"
        }
    ]
}`;

    <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js"></script>
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css"></link>
*/

var app = new Vue({
  el: '#app',
  data: {
    message: JSON.parse(jsonString),
  }
})

var app2 = new Vue({
  el: '#app2',
  data: {
    message2: JSON.parse(blogPostsJsonString)
  }
})