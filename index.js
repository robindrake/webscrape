import fetch from 'node-fetch';
import * as cheerio from 'cheerio';

const url = "https://en.wikipedia.org/wiki/List_of_Presidents_of_the_United_States";

const response = await fetch(url);
const body = await response.text();

console.log(body);


/*
let data = $("mw-page-container-inner").html();

console.log(data);
*/
