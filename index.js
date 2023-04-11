import fetch from 'node-fetch';
import * as cheerio from 'cheerio';

const url = "https://en.wikipedia.org/wiki/List_of_Presidents_of_the_United_States";

const $ = cheerio.load(url);

const response = await fetch(url);
const body = await response.text();
let data = $("big > a", body);

console.log(data);
