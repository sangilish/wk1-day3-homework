// Header Component
Vue.component('headcomp', {
    template: '<span>Food Blog</span>'
});

// Form Title Component
Vue.component('formtitle', {
    template: '<span>register form</span>'
});

// Blog Title Component
Vue.component('blogtitle', {
    template: '<span>comments</span>'
});

// Blog Posts Instance
var blogs = new Vue({
    el: '#blogposts',
    data: {
        posts: [
            {
                profilepic: 'images/profile.png',
                name: 'Brianna',
                foodielevel: 'Novice',
                bio: 'Food enthusiast. Love to cook and experiment. Into only organic, fat free, sugar free stuffs!',
                date: 'February 18, 2021 @ 3:30 pm',
                reply: 'REPLY',
                message: 'Was amazing! My Walmart didn’t have coriander in stock and didn’t have ground cumin...',
                thisBox: false,
            },
            {
                profilepic: 'images/profile.png',
                name: 'LINH',
                foodielevel: 'Newcomer',
                bio: 'Love food! Grew up with meat and potatoes. Recently venture outside my comfort zone...',
                date: 'February 15, 2021 @ 9:46 am',
                reply: 'REPLY',
                message: 'I just made this soup today and it’s so tasty!...',
                thisBox: false,
            },
            {
                profilepic: 'images/profile.png',
                name: 'CATHERINE LEONARDO',
                foodielevel: 'Mentor',
                bio: 'I have to say I never was the adventurous type until 2 years ago. My boyfriend, who is of Japanese background, exposed me to other cultural food and I have never look back since!',
                date: 'February 13, 2021 @ 12:58 pm',
                reply: 'REPLY',
                message: 'I LOVE this White Chicken Chili! You are right, it is satiating meal—delicious with toasted bread. Refreshingly different taste than any chicken chili I’ve made in the past. I made it exactly as written and added some chopped zucchini, carrots, and celery. Instead of shredding the chicken, I chopped it into small pieces. It freezes very well. Will be an all-time favorite, for sure.',
                thisBox: false,
            },
            {
                profilepic: 'images/profile.png',
                name: 'KALI',
                foodielevel: 'Novice',
                bio: "Food is my passion. So is cooking. I love to experiment and try new things. I have to admit I'm a food whore! Invite me over for dinner and I'll be there!",
                date: 'February 13, 2021 @ 11:31 am',
                reply: 'REPLY',
                message: 'This recipe is dynamite! My partner usually won’t eat beans but he finished the whole pot (darn was hoping to have some for leftovers haha). This is crowd-pleaser that I am going to add to my regular recipe rotation. Thanks so much, Lisa!',
                thisBox: false,
            }
        ],
    },
    methods: {
        authorinfo: function(posts, post) {
            for (var i = 0; i < posts.length; i++) {
                posts[i].thisBox = false;
            }
            post.thisBox = true;
        }
    }
});