import fetch from 'node-fetch';
import * as cheerio from 'cheerio';

const url = "https://en.wikipedia.org/wiki/List_of_Presidents_of_the_United_States";

const $ = cheerio.load(url);
//console.log($);
let data = $("mw-page-container-inner").html();

console.log(data);
