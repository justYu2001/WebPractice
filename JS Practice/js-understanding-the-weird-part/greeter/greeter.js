(function (global, $) {
    let Greeter = function (firstname, lastname, language) {
        return new Greeter.init(firstname, lastname, language);
    };

    let supportedLangs = ['en', 'ch'];

    let greeting = {
        en: 'Hi, ',
        ch: '嗨! ',
    };

    let formalGreeting = {
        en: 'Hello, ',
        ch: '你好! ',
    };

    Greeter.prototype = {
        greeting: function () {
            return greeting[this.language] + this.firstname;
        },

        formalGreeting: function () {
            return formalGreeting[this.language] + this.firstname;
        },

        validate: function (language) {
            if (!supportedLangs.includes(language)) {
                throw 'Invalid Language';
            }

            return this;
        },

        greet: function (formal) {
            if (formal) {
                console.log(this.formalGreeting());
            } else {
                console.log(this.greeting());
            }

            return this;
        },

        setLang: function (language) {
            this.validate(language);
            this.language = language;
            return this;
        },

        HTMLGreeting: function (selector, formal) {
            if (!$) {
                throw 'jQuery not loaded';
            }

            if (!selector) {
                throw 'Missing jQuery selector';
            }

            let content;

            if (formal) {
                content = this.formalGreeting();
            } else {
                content = this.greeting();
            }

            $(selector).html(content);

            return this;
        },
    };

    Greeter.init = function (firstname, lastname, language) {
        this.firstname = firstname || '';
        this.lastname = lastname || '';
        this.language = language || 'en';
    };

    Greeter.init.prototype = Greeter.prototype;

    global.Greeter = global.G$ = Greeter;
})(window, $);
