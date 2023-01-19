import {makeAutoObservable} from "mobx";

export default class DeviceStore {
    constructor() {
        this._types = [
            {id: 1, name: 'Holodos'},
            {id: 2, name: 'Mobila'},
            {id: 3, name: 'Nout'},
            {id: 4, name: 'Televizor'},
        ]
        this._brands = [
            {id: 1, name: 'Samsung'},
            {id: 2, name: 'Apple'},
            {id: 3, name: 'Lenovo'},
            {id: 4, name: 'Asus'},
        ]
        this._devices = [
            {id: 1, name: 'Samsung', price: 25000, rating: 5, img: 'https://ipixel.ru/upload/iblock/9e9/xt7q7wkawezzaoputwtwpldrsxt3z1sa.jpg'},
            {id: 2, name: 'Apple', price: 25000, rating: 5, img: 'https://ipixel.ru/upload/iblock/9e9/xt7q7wkawezzaoputwtwpldrsxt3z1sa.jpg'},
            {id: 3, name: 'Lenovo', price: 25000, rating: 5, img: 'https://ipixel.ru/upload/iblock/9e9/xt7q7wkawezzaoputwtwpldrsxt3z1sa.jpg'},
            {id: 4, name: 'Asus', price: 25000, rating: 5, img: 'https://ipixel.ru/upload/iblock/9e9/xt7q7wkawezzaoputwtwpldrsxt3z1sa.jpg'},
        ]
        this._selectedBrand = {}
        this._selectedType = {}
        makeAutoObservable(this)
    }

    setTypes(types) {
        this._types = types
    }

    setBrands(brands) {
        this._brands = brands
    }

    setDevices(devices) {
        this._devices = devices
    }

    setSelectedType(type) {
        this._selectedType = type
    }

    setSelectedBrand(brand) {
        this._selectedBrand = brand
    }

    get types() {
        return this._types
    }

    get brands() {
        return this._brands
    }

    get devices() {
        return this._devices
    }

    get selectedType() {
        return this._selectedType
    }

    get selectedBrand() {
        return this._selectedBrand
    }
}