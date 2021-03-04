const constraints = {
    fullname: {
        presence: true,
    },
    username: {
        presence: true,
    },
    email: {
        presence: true,
        email: true,
    },
    gender: {
        presence: true,
    },
    title: {
        presence: true,
    },
    phone: {
        presence: true,
        length: {
            minimum: 10,
            message: "must be at least 10 digits"
        },
    },
    chooselanguage: {
        presence: true,
    }
}
const app = {
    data() {
        return {
            image: './images/chin.jpg',
            name: 'Donlawan Petcharat',
            IG: 'donla_boong',
            formdata: {
                fullname: null,
                username: null,
                email: null,
                gender: null,
                title: null,
                phone: null,
                chooselanguage: null,
            },
            language_lists: [{ language_id: 1, language_title: 'English' },
                { language_id: 2, language_title: 'Thai' },
                { language_id: 3, language_title: 'Japanese' },
                { language_id: 4, language_title: 'French' },
                { language_id: 5, language_title: 'German' },
                { language_id: 6, language_title: 'Italian' },
                { language_id: 7, language_title: 'Korea' },
                { language_id: 8, language_title: 'Chinese' }
            ],
            errors: null,
        }
    },
    methods: {
        checkForm() {
            this.errors = validate(this.formdata, constraints)
            if (!this.errors) {
                alert("Create Account is done.")
            }
        }
    }
}
var mountedApp = Vue.createApp(app).mount('#app')