import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);
Vue.config.devtools = true;

export const store = new Vuex.Store({
    state: {
        cart: {
            products: [],
            userCoupon: '',
            orderNumber: '#52976'
        },
        cardData: {
            paymentMethod: "VISA",
            cardNum: "",
            expirationDate: "",
            securityCode: "",
            cardName: "",
        },
        userData: {
            subscribe: false,
            email: "",
            country: "",
            address: "",
            city: "",
            zipCode: "",
            company: "",
            vatId: "",
            phoneNum: ""
        },
        isPersonal: true,
        currency: 'RON',
        exchangeCurrency: 'RON',
        exchangeCurrencySym: 'RON',
        exchangeRate: 1,
        totalPrice: 0,
        totalVat: 0
    },
    mutations: {
        setUserOrder: (state, payload) => {
            for (var i = 0; i <= payload.length; i++) {
                if (payload.hasOwnProperty(i)) {
                    payload[i].quantity = 1;
                    let vat = Math.round((19 / 100) * (payload[i].price * payload[i].quantity * 100) / 100);
                    state.totalVat += vat;
                    state.totalPrice += payload[i].price + vat;
                }
            }
            state.cart.products = (payload);
        },

        setIsPersonal: (state, type) => {
            if (type === 'personal') {
                state.isPersonal = true;
            } else {
                state.isPersonal = false;
            }
            
            // console.log(state.isPersonal)
            // return state.isPersonal = !state.isPersonal;
        },

        setUserCoupon: (state, couponCode) => {
            state.cart.userCoupon = couponCode
        },

        setExchangeCurrency: (state, currency) => {
            state.exchangeCurrency = currency
        },

        setExchangeCurrencySym: (state, sym) => {
            state.exchangeCurrencySym = sym
        },

        // Applying discount
        setDiscount: (state, discount) => {
            state.totalPrice = (state.totalPrice) - (state.totalPrice *(discount/100));
            state.totalVat = (state.totalVat) - (state.totalVat * (discount /100));

            for (var i=0; i < state.cart.products.length; i++) {
                state.cart.products[i].price -= (state.cart.products[i].price * (discount/100));
            }
        },

        setCardDataCardNum: (state, cardNum) => {
            state.cardData.cardNum = cardNum
        },
        setCardDataExpDate: (state, date) => {
            state.cardData.expirationDate = date
        },
        setCardDataSecCode: (state, code) => {
            state.cardData.securityCode = code
        },
        setCardDataCardName: (state, cardName) => {
            state.cardData.cardName = cardName
        },

        setUserSubscription: (state, sub) => {
            state.userData.subscribe = sub
        },
        setUserDataEmail: (state, email) => {
            state.userData.email = email
        },
        setUserDataCountry: (state, country) => {
            state.userData.country = country
        },
        setUserDataAddress: (state, address) => {
            state.userData.address = address
        },
        setUserDataCity: (state, city) => {
            state.userData.city = city
        },
        setUserDataZipCode: (state, zip) => {
            state.userData.zipCode = zip
        },
        setUserDataCompany: (state, company) => {
            state.userData.company = company
        },
        setUserDataVat: (state, vat) => {
            state.userData.vatId = vat
        },
        setUserDataPhoneNum: (state, phoneNum) => {
            state.userData.phoneNum = phoneNum
        },

        setCurrencyAsyncMutation: (state, currency) => {
            state.currency = currency
        },

        setExchangeDetails: (state, payload) => {
            state.exchangeCurrency = payload.query.to;
            state.exchangeRate = payload.info.rate;
            state.totalPrice = state.totalPrice * payload.info.rate;
            console.log('payload', payload)
        }
    },
    getters: {
        getQuantity: state => {
            return state.cart.products[0].quantity
        },
    },
    actions: {
        fetchUserOrder(context) {
            return fetch('https://private-32dcc-products72.apiary-mock.com/product')
                .then(res => res.json())
                .then(data => context.commit("setUserOrder", data))
                .catch(err => console.log(err))
        },

        setPersonal(context, type) {
            context.commit('setIsPersonal', type)
        },

        setCurrencyAsync(context, currency) {
            setTimeout(() => {
                context.commit('setCurrencyAsyncMutation', currency)
            }, 1000)
        },

        fetchCurrencyParams(context) {
            var to = context.state.exchangeCurrency;
            var from = context.state.currency;
            var amount = context.state.totalPrice;
            var myHeaders = new Headers();
            myHeaders.append("apikey", "DEH9i39DTMgyapbDgAcQIOfOIGG6b6ox");

            console.log(amount)
            var requestOptions = {
                method: 'GET',
                redirect: 'follow',
                headers: myHeaders
            };

            return fetch(`https://api.apilayer.com/exchangerates_data/convert?to=${to}&from=${from}&amount=${amount}`, requestOptions)
                .then(response => response.json())
                .then(result => context.commit('setExchangeDetails', result))
                // .then(result => console.log(result))
                .catch(error => console.log('error', error))
        }
    }
})