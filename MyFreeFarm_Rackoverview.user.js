/// <reference path="./typescripted/index.d.ts" />
/// <reference path="./typescripted/ci.d.ts" />
/// <reference path="./typescripted/mff_all_171130.d.ts" />
// / <reference path="./MyFreeFarm_Berater.user.js" />
// ==UserScript==
// @name           MyFreeFarm Rackoverview
// @namespace      https://github.com/BastianKanaan/GMscripts_MyFreeFarm
// @author         BastianKanaan
// @description    Gives an overview of your products
// @icon           data:image/png;base64,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
// @date           18.02.2021
// @version        2.0.2
// @include       /^(http|https):\/\/(|www\.|s\d+\.)au\.myfreefarm\.com\/.*$/
// @include       /^(http|https):\/\/(|www\.|s\d+\.)veselaferma\.com\/.*$/
// @include       /^(http|https):\/\/(|www\.|s\d+\.)myfreefarm\.com\.br\/.*$/
// @include       /^(http|https):\/\/(|www\.|s\d+\.)myfreefarm\.de\/.*$/
// @include       /^(http|https):\/\/(|www\.|s\d+\.)myfreefarm\.cz\/.*$/
// @include       /^(http|https):\/\/(|www\.|s\d+\.)myfreefarm\.dk\/.*$/
// @include       /^(http|https):\/\/(|www\.|s\d+\.)myfreefarm\.gr\/.*$/
// @include       /^(http|https):\/\/(|www\.|s\d+\.)migranjalinda\.es\/.*$/
// @include       /^(http|https):\/\/(|www\.|s\d+\.)mabelleferme\.fr\/.*$/
// @include       /^(http|https):\/\/(|www\.|s\d+\.)myfreefarm\.com\.hr\/.*$/
// @include       /^(http|https):\/\/(|www\.|s\d+\.)myfreefarm\.ae\/.*$/
// @include       /^(http|https):\/\/(|www\.|s\d+\.)myfreefarm\.ir\/.*$/
// @include       /^(http|https):\/\/(|www\.|s\d+\.)myfreefarm\.it\/.*$/
// @include       /^(http|https):\/\/(|www\.|s\d+\.)enkicsitanyam\.hu\/.*$/
// @include       /^(http|https):\/\/(|www\.|s\d+\.)myfreefarm\.nl\/.*$/
// @include       /^(http|https):\/\/(|www\.|s\d+\.)myfreefarm\.co\.nz\/.*$/
// @include       /^(http|https):\/\/(|www\.|s\d+\.)myfreefarm\.no\/.*$/
// @include       /^(http|https):\/\/(|www\.|s\d+\.)wolnifarmerzy\.pl\/.*$/
// @include       /^(http|https):\/\/(|www\.|s\d+\.)pt\.myfreefarm\.com\/.*$/
// @include       /^(http|https):\/\/(|www\.|s\d+\.)fermavesela\.ro\/.*$/
// @include       /^(http|https):\/\/(|www\.|s\d+\.)mojaderewnja\.ru\/.*$/
// @include       /^(http|https):\/\/(|www\.|s\d+\.)myfreefarm\.se\/.*$/
// @include       /^(http|https):\/\/(|www\.|s\d+\.)th\.myfreefarm\.com\/.*$/
// @include       /^(http|https):\/\/(|www\.|s\d+\.)tr\.myfreefarm\.com\/.*$/
// @include       /^(http|https):\/\/(|www\.|s\d+\.)myfreefarm\.com\/.*$/
// @include       /^(http|https):\/\/(|www\.|s\d+\.)myfreefarm\.com\.vn\/.*$/
// @exclude        http://*/dyn_bubbles.php*
// @exclude        http://*/login_inc.php*
// @exclude        http://*/stadt/*
// @exclude        http://*/nachrichten/*
// @exclude        http://*/vertraege/*
// @exclude        http://*/nutzer/*
// @exclude        http://*/payment/*
// @grant          GM_addStyle
// @grant          GM_deleteValue
// @grant          GM_getValue
// @grant          GM_listValues
// @grant          GM_log
// @grant          GM_registerMenuCommand
// @grant          GM_setValue
// @grant          GM_xmlhttpRequest
// @grant          unsafeWindow
// @require        ./MyFreeFarm_Common_functions.user.js
// ==/UserScript==
var VERSION = GM_info["script"]["version"];
var neededVersionBeraterForRack = "2.5.3";
var neededVersionFunctionFileForRack = "2.1.7";
var GM_Home = GM_info["script"]["namespace"];
var GM_Source = GM_info["script"]["namespace"];
if (!VERSIONfunctionFile) {
    alert("Hi, I am the MyFreeFarm Rackoverview-Script.\nThe function-file is missing.\nPlease install me again.");
    location.href = GM_Source;
}
else if (compareVersions(neededVersionFunctionFileForRack, VERSIONfunctionFile) > 0) {
    alert("Hi, I am the MyFreeFarm Rackoverview-Script.\nThe function-file is too old.\nPlease install me again.");
    location.href = GM_Source;
}
var DEVMODE = GM_getValue("devmode", false);
var DEVMODE_EVENTS = GM_getValue("devmode_events", false);
var DEVMODE_FUNCTION = GM_getValue("devmode_function", false);
var IMAGES = {
    "racksortVeterinary": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADUAAAB1CAYAAADuvqkcAAAABmJLR0QA%2FwD%2FAP%2BgvaeTAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAB3RJTUUH3wcEEAAkMtsIvAAAIABJREFUeNrtnHd8VFX6%2F9%2F3Tp9MZlImvZKEEAKhBpAqvQqoiKKIiG1Xv66uupbF1XV17WsvWMAVCzZUUJGO0rtAAiGEQEjvZWZSJlPu%2Ff1xJ5MJRVDc%2Fe7v%2B%2F3e1yuvgSn33uc85zznnOfzvo%2FAf%2FYhnPYqAp7z%2FUj133CDF3vI%2F64Lneuc8lnel38Dr0k%2F90X1v7H7BBol%2FSs9pf6VNyr%2FjHc6DBB9ryqfEW7f9UTA6%2FuTL8Jzv1n3O9v3xQBD3Bd5P6oAb8i%2F1mPCr%2BxKHYZ4%2FhUt7Ts0vlfpHN1VvtjuJwRcSAScHb%2BPMhuSR6Zar%2F%2F9yG43T3ljW%2FzpP3StXgh5jXC3GZYXoZ3z%2BRknP%2FnMtPayaptryIjIYGFCDHJZG2KPxWLAjWt%2FSQMKv8Aoja%2FFPAmhxp5VdmcewIiseNKTrQwKDULSagmVnDQ7PZj0Sns1Oz0kxYZzaZTAp3uKsBpFAOpalcZv8OhwtHn5qcrG58smIGyuRmqW8LTV8%2BzWxu2Prz8%2B3uOVnIBOWnGV032kDN3Du8SL7X4dg90DMDAh9ElzePDCK9PCCVO3YzWKmAxmAEKDlCERGmz2%2F7jRYafnbdORD1WQv3t%2FlxM3tngBOFXfBMB1Y1M7%2B1akjp3rK%2BjbN6E946HvepW%2BPKnQVVqBNiICV20tuod3CRdjVEeriK9d1d9jMmi5cUIczM3m4Su%2B4Lk1OXSzGP1fLrK1kvPHYfScmkb67OUU2Vppf2YyNS3Q99kNAFgMWopsrQCEaRWPNrg8uNfdACU2pLp2RKsOZsXBTyegSK%2B8Z1K8jF6DcMNX5%2FSW%2BgK8JP5hXJa7pbUZR5uXO2fEIZtFhK3HefLr2WzJLCfaZMCsFSloaOHYu5OgZwgyUFD1Z56e8SlCUneiahqJCzWQoXURF%2B7msp1udn6%2Blo3COAzLRXqUmLj5zz%2By5OnRiNhgVhzy%2Bkp%2B3Anusm8ZP3Ci3yDZLJ5rarkgTwmA6p%2FzhrgBDpU18tKC3sonTjeu2lq0w3sSddkyAKo%2Bmo5Q0w56TWc3GhKGcCoSd109sWtuwbO1F1OSRwCQ1%2F8Kct7IwxK7hCnJIyitLGNXUT3ujZOYUL6C9fZZuPXVLPn4KClWJ6MzB%2FKnTS28tjHXDLSdax2oPo9B6t9dPsDV3ObC0ebF7nQrXrJLoNco%2FXv7Uaptf4Wtx5FjVGBvAKe7s5tUepFPlqNqq6O9royoKweyl30UvNCPld%2B%2Bxk3Ln0AG4qbfiW3Jw7hyF0C8gfUjNCDfzpIp17DhmSaW9xPR6NRYtJoEwAEYzxXuxfOMJc2m7ccBqGl1UmVTIrnP%2FX6PuJ75BjlGhZCW0vm%2BXgOJFo5%2BX4jcVgfAwP1z%2FCcfdaOHY190I3z2rYz7WsfBuOtZlfsHhEov0tsncX84hHXzZnJbVijL%2B%2B4BPgbgkQndc3wh3uULYMIv6n5%2FGJclr8k5RfcIEwDRFj1VNifpUcG8tKA3rtIKhAQJzbzdPPTAHTyRtR%2FN3Mth63Fef%2F0g93yTQ1ZUMPsXzkRuq2PcM0qgCF%2FbyvqFTzI%2BvoJJ4QLRU1u45S9qqi6v7hIMXKUVvLflCHvtVt6dnYmQYsAX0u8EPgMafbfqvVBPqdbknMKk79yd2F0S6VHBFFQ7kHL2sbQkiAGvq2DbNJ6SV%2FHMpijkwpPIMSqeWJNHVlQwQUYtclsdnrZ6PKEWJfqtfJU%2BJ19nUrjA0d0bAXj0%2Byncah%2BPW1%2Ft7w29Xz5Cn7Qs3p2diWgSEWra0fSKZ%2B1NvV8HcSHQ12eD6kKN0hbZWukfH%2Bp%2Fo7XNRUG1g0pHG57QWG59awMLdmxHrjcizuzNI%2F%2F8hhOPr%2FSH7cDjhE3pqjadgbYPH6ZS5%2BHHXbvRZY%2Fj2b%2FVcKfhOPttzQC49dU88NR3mPQqhk6IRUgxdHYtu8ToVBMgx4DqBiDtF4wpsR1gZFqk%2F51KRxtfz03ipw%2Bv4J0D7aRHmvnjQ8m8dNnnZNxaiOupobjjMnAvP0xB1Z%2FJrXZQUG7zT8hmlYryxja63f%2B%2BMjeNH8sLr7zD0ZNHyej1Pp6aPKaXjGLQgen8MPljpKvuQ3v11zzw1HfIl0YhR%2Bo4eriWq1fUAzQB6SAMuWBP3T61vxdgSIyWWHcCrXUNlDe2oR3eEwrquHNGNx4bl8C4D6q5VyXw6jDFMz17R6CNiEAuPIm77YkzzmsxaCl6%2FkZsfddyZMs%2BwrRqemnb6BvroIfRQlBxM56aPJwnluOpyWPco%2FfwQZ7MA%2FM%2B4pZn99Pn5R3Y3e2A3KoEC3Eo0OuCQnqpow0iRJ68SUSaoOLQFyLfafpDQZ1%2FnrpubCrXzslEE6%2FlElMoE28Y5P9c2FwNuxuo2j8PNrmJpI7WugYi%2Boyhz%2FMraV90Nw5TJJOb2qj58391ubbJ3J3KonyCw8M4drQc58iHWR12lBd1uXywH0RBBATJFwGTQOgL8oHzeqoktYF%2Bv0tGKnWxZ1EJjlUeHv5iP1JzwLSQbiV%2FRzXRPUPY1dzIsrd2d4ZzX0h3Lz%2Fs%2F7rRGkb78Fs5%2Fs2btCSZCA4PY%2Fvtd5z1%2BgfrTGw95kIdmUm3DIGShqsZnWoiTKumoa4J3zzlUQwTMgDDeY3KeqgHg1KN7Py0nOLdNVxx71ia70zssuBc98Fe%2Bny8C12NF02omvlfHUM2i8o8lmihamsNl7yV7%2F9Nv7teYURmDzyORoKKlaAQd6mZ%2BL%2BOJWTADOoPVXO8SWa8dhs1K76nevMaDry4iE%2BfeZthw7fzaFN%2FLAYtYdYQAnYNbp9BqnPOU5Me6CNbbwrl2OcV6ONNJA0zs2fkT0gjzfSe5aG%2BPRb7lkpqU91ENQajDlGimj7exKTscP6W%2FQNJGRYqpDYAxkghfHvLADxt9UxL3UK%2F8o84mb%2FHf70v31kUsOuLQ%2Fi0AdmiRgjzNXxICwAbnJFc%2BeeX0Ld8y1WmQyz6%2FqfXQbT6jGsB71PAsbN6Kie4nE1fHGZQqpFdv88h%2Bu12LH%2BIpudV8WRnZeF2eDD0jyCqMRipwYnrpIPuQ61Myg6nT1MsmnQt1WYnqhCBgfdmYDRoEQxW1I0Vysqk4hQAjvoGHPUN596rN7QhN7RBUxArCkzsEtMQyMWSvZiCwmIX0Bow8QYD8dOT4lRnDRSVj9QLAIuoR61VyRXf5BD3eDDIdvKqU%2FDanHia3EgNypIpcWISlXN%2FYmOrsn2IHhWmrD5GhRCU76WutMp%2F7l4UUGqv8f9%2F7S3fd734arvSfWweZItya%2B%2BttVPjgPLVO4BRHH9BYNAXXlvAKt3jMyr42%2BJy%2Bbxbj%2FRV3SgtDWZSVjgVubXs3VlHtMlIWZONm6ZbeOP3FTR%2Ff5DSEVbc1gbivXFU766lx8Qoui8tJ9%2BlJcYa5j9fWY%2BeJHAn3TSzuLufC2oNyKuDEWyerolBi5pj25VGiw1Ths7%2BUjcb37udzZLM8Oe3Ruybk6UNWMxKIGhBPr9Rjbsa%2BeN9abzzjxMAeJrc1Fokpj03iKdCvmFUj2jMWpFCezNJyVGK94ZEMMAC9pAIqLFh93qprqujubKNYVkC9%2FTz7YtO6s7scj7vdBgpdzNQUe6ixqF8viLiDt5MHk%2FKAisgBPmMEoFmZVwp%2B6tzRr%2FkmxPl1LhEVn2thP9ok5H4eAsDrCLO%2B0vJNIJZK2J3SbSkKJGsxa5iythQ2j6owaxVTt3S6vKfc0euzHc1EzjmEs8wRp6TjmDzIJ1UAkNG767tbQ3TkPf0OgCulNcBgsFnlABUglzbsak9p1G9x8XgLGumeL%2BB7kOtANya3Rfd4jZ618nMn9SPtLBgDrgdDA7pTl1OC6H9jIz41s3EYVmkhQUTE6xEsCirlZSBg7Ed8zL3xsspO6pmg6Nz0yrYPAifFuCtb%2Fe%2FV%2BgeqQQWBxS3qKhrcFOQPxVP70gefuLdRT6veH2GtAN2n5OksxoVeptBpspJtMlIcXM1l2kkpq09yacLljNjcBqT061UNrSxwuHAO8jEkZ8qUScZeGT0ULTBygI4JsxAtEVPTLABua0OwWDFvPEuonrO5B%2FLlMTMBn3QGdcu0Js42qKhsHYbO8tdfoMAShquRiAXEEy%2B%2BUlWDJFLgOqfXSb1GZuIAyeb5xwTAN5dcVDe1uRhYlokowens3TFTg621eLK1hGCiG56NP8sD6Hos1Jcp0dThzJfuRuO0bDyAKNS1%2FJFyIts2XoPA5JaWYkRfYVv0KCnot51hoc6J9Vc7Ksfe0cJCnh9c5QK5BM%2BTwEIZzWqw5iO48eadgEQ1hXWSKMWLiM7NgTJruXUyWpMzSb29xhORDc1oXV1NDo8gJbQYLM%2F9yeaRGiDfr2SeGGgk0scr%2FOn72%2FiuuRniMiMBK2R5IZKf0CArga1xgSxp3499tVD3gZB5wvjviAhbwX5UGAS5pcIBLLH5dXuKqp37SqqJynDQmKIBe2AYD5fn6cEk1AjvUJFqoRgPDo94WEWRqZ5kMNTUTdLRBpbeaQgiEut1WitU1jePIWr8i4FoPY0qazDoOOxj9IiPIyr7u%2BAoPF1Ow%2BgV5ZH8kmgNkDikX%2BNPqUC1CGXG5w3d%2BvLCy%2FtitGoxEqARKvlrD8IV7laNSpBbdSIqh%2BLm7vcfcjwG3EGTfd3LwCzdxM21d2oD9eQPWgj67%2F6cqnPkA4P6ZUFrbwXpM%2BBcp9R3l8rugmAkHplnPfEV%2BV634lCQVwADPQtX5oDBrIn4ILqAEXDL3mO6Rd%2FX3t4JsfdsbQHJaNrOUV3TQU7Nq5fGpBDl3wNqlP%2BL60CeaVv%2ByEGSEO%2FWkkM1GDVvgtrQBgN4rVAtO%2B9dt%2FFpIDX05ULb4CRASsEvyFqX0Aw%2BF4rwPs2cNj3HdXpWtfFyqMdupQ64CY6xIQMEHqBOAiI9zWAGHBNyWe0y%2FfnCZh3RN%2FnGsUz8iGQ1gEFXUO5vwd00bN%2BK823Q0QQA1pcOq2bdcknKuNCGAfCNCAqwGsd3bTDa%2BtA2hrgGXVAo3h%2FiWz6n4geiBcarf9%2FQQ6E%2F0MO%2Fg85%2BF%2BKHAgBnpAusGXFc3Tb%2FyjkQABURoNOo1OLKp1GbQk3WNqPlJfV%2FYxR0m%2BJHPzSSVbrW3f5u29atCXtsdnZj7Vvur9UoxLl0%2F9k%2BaAsy7tkWb5Dlj3vy2f9TsVip7TrUbu04ipZbvmDLH9w5enzm%2FYsPeK3RQ56Job3PLLqwR26fg%2BFBCIHCd3jiFG7ibJ02l1tc5IRZ0UzZQDsLQaLL59na0NubqW2rpZqm5PeM0P96Wo5Uof7SBl73KHbx%2F597Xi3R3IuXjBSvmlmFP8S5OCKQclPNrmlhXP7J3HD%2BEw0qT4exOpLpISdZaUekgDyQSg6S1w6oeAGcnKNkn8PyAALM2%2BTaWlyZfb8fa8jr40tdB8pQxsRgXDbtxdtlB85yHlulierbw8ozoV0Kz%2BsrmbW50cYFwaHShr8yMHmW4cw9K5MhEovUZcto9r%2BI9BIetQ1mPQqmp1ebG2uLhqWSa9i%2F2vjFT3Z6VZy8d18YE2RvlNHBqSCQ6j%2BUXJOw8QLXJ7Iq%2F5rjCfKomf58s3IkToosTHm0VQmJ4WT26Jj9tA0xl%2BSwuxhfRk2uwccbUKOUfHI5MyOzAfdI0z8aXgsM67vxfaGNuR5NpJeq%2Bfq%2BTYskWbufSVHycVHKgzFxJdM%2FPAdrFv7becd6TW8k9v4sw65IOTg8RunuxdMHcaijz7nycviOwXs0gpFrxrZnWlZr7HqoaGKeh%2BAHchmEWHm5QDMmD2H9IQRTKzZz6bYW3j7ixewVdyMJXYJT%2FeIIkebwqeHm3h9SBD%2FvPwg37sUNGHJx0e5aZQiQf1myEFD8THUxyRMXq%2FCTiTEgtPtRw40MSpWvTlZUeh3N3ThKISadjhRAd08%2FNjyLUeFHRya7mHdNdnsH6hm%2F%2F2jkYETjW6SeuhpODyDt658n%2FXXaHB%2FqBi04ZkmTvwuiJcPugkP0qdcNHJQX1pPZnoC61vbsMZH8OCGBkWq6dCgAPfyw53IQaJF6f%2B%2BMXC0sAlSeoOYyGUFcxUWaY%2BaGS8JNGs%2F9iMHz46K5MG3BiOvr%2BSmUb1wfziE%2Be95%2FMhBeb1IN4uRtY9N238%2B5ODnjPL%2BYVxWS51vLOYfaaShtZnM9ATufSVHIV58yIF24Z38ebEG98crYJAJ0q2QbmXZ9%2Fk8urFE2e3LYRgio%2Bg7TyY17AG2rJ%2FFh83LeOXyt%2BinmsQ7yf%2BF9PZJhJp2tBERaIhn2eI5vJPbyM3Dr2PZg%2BM49u4kejaXhAK3AiEBaecLNkp1oKwaKwINrc20Olqw21ycqmwgMz2BqHvX%2BZED6f6FfuQga8w%2B5BgVs%2B%2FbxOMHA7q8oETHbpuWcqLhOfpEfkpB8hUYVn3Hw7pkvrTe40cO5EgdON2MGfYIKXFJvDs709%2BVNb3iEQRhBgh%2FBWHgL0UONNUNbWRnRhNmNGEMDqJRljBbtByoqCM9zuJHDt7JbfQjB3Pf%2BhGALceqyApq9%2BfUO47UdXeTPFgxdurI23FMs3LVP9SMjH%2FTjxzI2%2FZw%2F%2BL1TJ7Uj4mXdDsDOdCIahXIVhBvBFJ%2FQaAQXbY2FwtGpHHkZCMHKiSaHCpyC4rY%2BvY0KKgjPdJM%2FvxQxNXryMicT%2B7CIcw8rMNtcVO1fx5CWgojM1%2F2n9Gs1yDftY6%2FTFbzwJtt9L7%2BOk4eWkF47BAcLzbgzRIZdGA66uBMmAzpW55kzF%2FWcU1%2FLb%2BfO0EZo4drGZIeE7H1aEmBT8S%2BxJf7816ApyQJIHL8VEYnR5AgyVQ66th4Q4pfge9ADhAsvDpMi1wqkmpRoqJ7%2BWHkwpOoTfquIfVVRcppyD5BxY4dxIoGkmNqyLgymTHdExk10IFVuxOPI4%2BCUQ%2BTOO9BPj5lYNn3%2Bdy86AB9Xt7B5L6x0Z0hXRgI9LjgeSq1T5iseyGMvkSw%2Bo2DrIrrz7C%2B4V2XypE6Pvk0j0UH6hQPltg6P3S6leXOjJuAUO6%2FZAzhb9k4%2Fs2bAPT%2FUzxZhlls3vlql3Pu%2BLHM%2F%2B%2Bqegsn83uzfcxH9E5NIHr%2BIh69ZqDrziU7XgVVEmAG6SuQ37mgFUXrbIG%2BRBBS00rzXgU56Co1KsjBLYeL%2FMiBbBY7Q7peg%2FtImRL9hBNYe%2FTl%2BDdvEhZsISitkoIVe%2Fnyk4eIPNhOtqT1%2F2UZMqmqt1BVb8EwMp70QRLjvrMgXB5JXKiBsFC99jTkIDUQOTjnmBoxP1POStGw%2FeMiju%2BzccW9YylqOcn9i9fz%2FC0TQK9h3Qd7mbb2GJpQtR85sDeW8rvbJylruEQLc1%2FZzxcLLSCVYJ7zMuzdRXtUJ4aQfvkgehpmcXTR8wA0hffh%2BWmzINKMHKq0%2BbFpIoP3vsZbiwrI0Lpo93g68uodO2pzoC1n7X5z8y%2BVj31egcqiJ21SGDd%2Fbeemwnr6jm3HNDCD3GeOIYYpY0UdomFQqpHcdpFJ2eG8f%2F1PndsOs5N5od15c%2BVbeLbV0nPFZaSGPUB6snKzr859tlNpkWRGifEInzZAt%2BDOm4kwgbua%2BWv0fL9%2FLULxIh5Iy5fvf2%2FnGyCG4ce7vX%2F1JTvP3v02fXGY7kOtFD1cwKSlKppv6kPfse1kZ2Uhlbow9I%2FA1DvUjxw0RRr9yEFxvo1qs5P2SBXeps5F9D9Mk%2FyhHKClMKbLNS8VhTNxA4DaZlYUmFh6dz2uutVYsheTc6rR7WOTOh490gJxlyXEqs5pVOUj9cInE3YKDS4PZTl1PLcqB4CK3FoctRLtxQ6aDyv8oHlUDCE1rXwwbjezxn8MESIhPoWwx8QodM1tIFjYWCBg6aHyG%2BRxNIK8uounApGDjmPN9mbyt9h8%2B%2Fcsjr8gUG9vt52WDzEAlu9KKy4MOViZJ5OSoCekJpq9J1qJViBNek6JwXb3KaKPNdEO1A73EB8eh9nrwq7S8uS8GBped5FnUtabU65SsyNX5oYRW7n20lKEkzrkNS%2F6jRhR344Q7ttozmlDekOkoELxXqSvN256bwSbJRlHi8vm807gYlbXsb%2B6IOSgutDDyp11eJrclDXZGPREOtObY8gbKBHl%2B%2B5PETJSg5OThXbuuSYS1xLl%2FfY6O8ingAyGZQlcqypFaFTuRQgz%2BLuZKlznRw6kN0SOV6ooDvP4pdJXvsrAe%2BUoHps6lZZjVUdOQw4cPs33%2FEZ1IAfe6miiTUYwgWVqCNHvFaBzhBFmNFFZVssSXT3BERpa7CpC9EFkbDfi0kCLQYvdJYHQwPWiwB2HJKZmivQItSI0Bmih3YKRG9oQbB689e2IKUFkhHs4VQEVPmotf0Mp1XmfA1ORJG8hiB1ykQqo8uli4s8aFfNEuOwsa6a4yUC8Lw1xa3Zf9F%2B56BceT%2BTAJHLVbu7ad5yGgQ1U7xFIGxzJjh6j%2FQmXSo%2BGfXlVwAAi5aexHfsT%2BaUuyhKVsTM%2BIDAEjqP8CgGNdiQVzVu6CNrHI2f4KbsAlUTrW13Ud0g750QOohqDiTYZabJJnMxq4bkqMxVPfo2pvITI8VMhrReLthZyaGAtwzPSUVtl%2Fnb5KCL7ZhBqMhFl0RMdGYYmOBwkBTGI3ft3lh3vf%2BZu1GeQt76dAr0yaAtrt52h0FedvM8noYpnQw4azoscAHw355AyUpdAH22R%2FMDkPvz%2BtRdwf%2FI%2BK388zOrIRpJMUWx8r4DWxQv9qa%2BOI9prw1ZTCUIOCIm4V9zGmvSPaYybxmWaLJo1rUqjB4H%2BuOMM5GB%2FaefG9kftDqKkFzmy%2BrPfBjkA8Li84nNrcqTn9CP4ZP4lGLVamspr8RSbiBoSAYMHKnumxhY0DSFE%2BlJlo7YV%2BtbHJYwZP5RlV%2B7F%2FDLs5hn%2BOPUe1FY7njozyc22LvxEZ3JWQQ5cx1ZzZPVnZ0MOtoG876KQA0B97dJdrQCZ10Ugpui5V5dC7j%2BW0Ds1AaFvrC90miC0mQUj0qCoEQqbSUqKQG5u5Xr1Y3zkeYw9pWa65dUAzi7IQSAQUtTjU2zNV2BfrXn%2FHMhBIQr5fNHIgQoQ77vnkrazIQe9E60cLulMnfeL1bdqVKLabFCr%2Frmj1H%2F3o%2FokkhM8FmfQdD9uAKC1TqG9rgyBXIYYDp%2BOHHSkoYNA3gPS0oDxJF0UcjCmX6L3h4MlHchBFIhzFeRA%2FhXIQcJ9h81KLDwHcuANaFBfXl36DuSvfdf5lyEHah9ycJ0POfD6Qm2gQC2ddg7PaUaeDTlQBSAHWiUoSJ8ABwIUfM%2B%2FEjmQA2SYniCkgTgMSDgNOejwnBvloc2fQw4AuRykNcC%2BAIP%2Fo5CDjgBlAmEyCON9nj0bciADq0HaARz5n4gcCBcarcV%2F841d7CH9uy70f8jB%2FyTkoI3%2F4H7%2Bvxs5UOnUGlEtqESNaGlvai8%2Fj1H%2FWciBIVKfljoj9rGzoQQalSg%2FK98jX9M8W5blh%2BVzfeeGIxOdU9YNssstf5ClY7f89yAHwXHGns4qpcrB1AGpRMcF48j0YLee%2FXTlkxTBur2isTMnWKk0frdTKk6UldFw3RwoqENqlhBSDNw2tMW744Wju%2FJeKB6PV3YuXjBSnpfm7sANLrr7dUEOIgaGPjlhUsLCAn0bRcleomKUa%2BhiQ8lUGbv80JigI8OYpAgC3iZOFXY%2BkSOVdhLspaVOtgwf2AU52HGonlUvJ8pVdS2uJes1ug4t2Vfh4LdBDrIf7y4VJXtJawxi15CrYZCK%2Fve%2Fg2ODneJ6XxKlVml9d97TUHaUqMuW8YLjTra05pJhTOJB3XsQIfq%2F1%2BWIEHE%2FPb2zmsHcZKXCASDtFbo81Czl7Lt45GDE%2FEypXGgg%2B7CJHd5EyNkDW49z4PnbKK53kDQkEn03DfrBOtyLZyIf3oMco6LasYQtrblE6pR9ln6wDtMgNfHz4nhk0wsk3%2Blm9AdtmKZq0YSqIdGCaNUhR%2BqQ11f6kYNA3EA2ixePHITeZpDSe6UxYIPIm7NTu8g0rtpatA%2FNwNj3CVr%2BPg0hJFjRrgLUeWbF8aLRSXBbKQ9kfkXIuAya6mtJ6raQ4q%2Fvw1ZxM0nzttNUX0vz9y7cGyex7I1TXDc21f909g9rDwRWOBBQHgI7J3Igng85cOcJeG1O6ltqkOrauxQD0EZEQJGa1kOPQM%2BQTm0qgE75Zr%2BN%2FNZi9soSI7O1qC2nyJ5j47Exr5H9jJqQqNFET%2Fsb7YXgbrwDBqRibyyFW273MxQTP3Lx8MqDBH3fD32oLt6XvNSe6%2F7PixxYeyiPGa0zN%2FHsxlJFoum4cb0G12df4Xrmm07cINBLiRYeCz%2BqpI51nczSqT1qnimK8iMHcd1u4NHJEuxtRnr7JDeN6sW6eTP9yAF8THm9SP7xItIfSDpvlYOfRQ7G9U9uMXtdVG1pIlwM453oJkK%2FWt05YOva0S68E%2B3CnZ24wdxsSLfy7PpyNBM%2F4PrMfv4Trt5p8CMHLQ29kEtfJHzkjWy5%2B1ZCkh%2BHgjpEk4g2IoLxMTF%2B5EB66ROWPTiOz1Z66DstJRA5kH8xcrDDXU2LXcmTtNtdqBq9JKdEEXXHKqScfSw55kS6fyFsm9aJGxSeJO2ulfxl009o0rVnnLTwg6c40fAcQf20kNifksOr%2BGRzOl9a7%2BmscBCpI2NpIwPGPMV4q94f%2BTS94rn%2B5TJAmAHiwyAM%2BKXIgdbd6CHI7EVn1qIzKzdYl9NCcEqQv8rBO7mNyPVGP25w4vGVFOfblGjWIbOWKk%2BwaULVnNj7NMmDPVR%2F9yO7Ll9KYu9pjJMkRsYrOrBbX428bQ%2B1wz0UDWwnbdLILrjB6FQTgiiqQI7yIQdpvwQ5aKdWQgzT017WQpOzBWeRm5Y7BqKNiOD1dWW8GmmmoHodL0pDuPOpocy0aZQqB3nToZsHjeERIjFjTFAkGneBi76fLmbRZWqu142m2y1JVO%2BuJeENEzqzlh0DrqWq3oI6OJOkbnnU576K5paVnVV6cvZx9WYd%2BrSgiLYCx3EfcjDEl6E9P3LQUeVAHaJBZ9bibZJx%2F3WyQo13n1tMAAAHbklEQVSBv8oBgoV7VcpYTbW46dk7gqpPNkORGnfe0%2BR7S7pMsIceVZ6VL19UQtmaSqVlkwxYLw2j3F2G13yEduELAKKGvcW4R%2B%2FhmsfXULh2K7pXy7G72wnNNEb7VA4PCNlA%2BgV1v3X7T6JJ19J9qJWJs6zk9PWpbadVOVh27VVo4rVoh%2Ff002XRSTrYtBV27KKmXQnzYaoQonsN59EPmnjiz48RMjSaRz57nud2fUDUZaMhsT9B%2FbTKWAO%2FcWVHy2kMGcnsKEWdbDGrEIL8XFI7CN1BGHR6tvWsh2VO5GPJw8NI1cG6L%2BvY%2FGMjN45NVRacWsGPHAx5fxuR3cxE5zWSNS4VWjpxA9ks8l1qO5E6C22ykzTdc1Ru%2F4zKoAakPk6Ot1ZydP%2BXSIaoLtd2V3mRCwXU6l6IQREUeOZTVxKMu3krWlFGSNeqmvY6Dvry6iolCsrbOyZj9blwg6T7IzDvb%2BL9pwtwN3oIvTOZ%2Bxev59k54%2Fw3vP6DvcpitsbL%2FC0BuAG%2Bsg3bj5IxM4v81mK%2FqFSuVrZWLQddBIUdwZ3Yn9Bp11D25IcAZI0oZtm1h5B7hACbARj2dTxH3s0CIFllpsDbBl2rHFh%2BFjmY9EAfud6k7L6jTUYSouC9u8uZ%2FIoK08AMinfYaT7cSHWog6jGYIYOtLD3RCszL0%2Fiqeu24y5woUnXogoR8DbJ%2FD33evJbi9F%2F3Y%2B9xp40H1oLQFDYEXbdldNFyL70c2NX3AAgpIUNzkg%2B%2FNHO6q8up7d9A0cznXLVstoLRw5ygsvpcXUsg1KNrHnoMFPG9yPrrlA%2FbuB2eDD1DvVXOWiKNNJ9qJU%2BTbG4C1wkZVgIjzYRZddz7ezObiWqb8CSd6QTOWjodVbkoAM38CMHTUHsEtNYenc9luzFeO4y01LidAfIoX7kYGZC3NmRg8pH6oWPMzYLi%2BYqgts7G%2FOJS7X7cQOvzUnz4UZ%2FlYOQmla%2BuHGfHzdoj1SGadrkeMpbzERiJtG5nSOkU%2B7uZI5yhnx3JnLgUxUDpdL31trZ%2Bd4%2BAI6%2FIFC2pwGPQzorcrCy9AKrHAQjkhmVxcoVxUSblC4ZPNRISE0r7z6QR976epKGROINVWH2ujhZaGfe7d35cNFxvE0y1z87gYoDKqZcpaZk%2BV%2FoppnFXVc6EHYbkNdc3QU5wKfQC1McrH3RCDQTaxIx5rX4DZ8xeh1vbRxyOnIgK0FDls%2B7n2rc1UhmVBArVxQruEGZEp6v7ZPOuwsOE90zhOieIbTbXX6DUtLMfPJFAWqr0vI12KmoVliol66ZqBgUgBz4w3CHQTYP3jdEknz4QYc6%2F8pXGVyR%2FC7b8o7hOuEMRA4ERcSWG7jQKge7N9QCEB9vYdaNaSREweoNB9EP1qFOMqAza1EnGWixq4iKDGX4hChCwiMIF8P82%2FiOo6PCgRwaqTBHHc08Jx3ZovZXOBBTuj5Tbw3TkL%2BhFFAqHMiSVBhQ5QCf6Gbv2NSqzoUb9BuYRNMpGyathpiBFuYnZrJ%2BayuHjpVDXAjJg6JwNbSikdwYQjUkWkMRswxUtsoY9KDRAy0Cc%2BaPQswMQbbdxNuvPURm2zeUOyVS7IoBtHkQ9tcitEvIbV5Eo5r8BuW2jtZ7qHHAiWovrW0Sxy03suafD32DjNMnZvuChFylqIo0cq4qB4q%2Br1Q5CM4ykhkVxNyFy9mbd5SeU2KwDNBDlROpwUlinyjqcloYcX0kERFGIiKMqCx6dEnB6MxaYohQFiCWqdiar%2BCtbdE0l7T%2BbIUDgJ2%2B4hqdorbyxLYsSXmnVTnw1aOg5mcXtOndrV2qHPRPCJFDegTxxOLZ1GBn6YJvabGrCE7Ws%2FG9AkZN7c7uw46zts0P3v3%2BpZLHlszOiluwXZLAgyUP8oo7jCRNo7%2FKQUXz2SocSLTGBLH12D9xrJ71qm9u8gYgPOKvQg4OlDYJ6mqVvED3MvrBOlLSFNjj1MlqumdbyH6qBzXtNv8Ww%2BLLd2qC1YSpQqhB%2BWzonDgctavY%2FO5DrE1uJiLTSD3GLrgBnFmyYU%2F9egRW41sWaQOQAx1wXHnk59criRq1VuUCiB4VRli8Cm2KsgKITgsjOELpzWKC1p%2FbExO0GBN0HP2sFmdZM3Gpdg5%2FqcYWtIIMcT69jafOuEigQcdjH6UoX8a%2B%2Bm%2FvB6iHHciBCaT3QV4bqBX%2FUtXD7XF51YC62dTsvCa0L6%2F%2BTSns1Gg9%2B9N5JSZHrdooBgkqQe3OdWsP%2BT8Zgq5PIl8Gz%2BmCHEQY3qam7XXUh2vw9q5miDuXQ6u%2FXBpgDL7J1qh4SN4fMLZ%2BtZAtjOmXKJWkeAmochAB4jwQ%2BiupK7k5QDw4B3Ig%2BBX%2BYeMm3BdY4QCgdsvSpR2wzWnIgU5JukgrQF7Pv6HKwaW%2BLbaVzgf9vedADuDCqxyofd1Nq4D10kdADv%2FGKgcdiZBkEPqAOBjodhpyIPpCssv32hYwXgKRA62yEZTLQNoO7ObfXOUgMKsjnUc%2F0vo8OxTEyb79UIeXvHQ%2B8CyA%2FIOvykFFgGfOplv5r%2Ff%2FAHFadfpWLplrAAAAAElFTkSuQmCC"
};
var Farm = /** @class */ (function () {
    function Farm(name, money, points, premium, level, farmMain, farm5, farm6, farm7) {
        this.name = name;
        this.money = money;
        this.points = points;
        this.premium = premium;
        this.level = level;
        this.farmMain = farmMain;
        this.farm5 = farm5;
        this.farm6 = farm6;
        this.farm7 = farm7;
    }
    Farm.prototype.getCellValue = function (productId) {
        return Farm.calculateCellValue(productId, this.farmMain[productId], this.farm5[productId], this.farm6[productId],this.farm7[productId]);
    };
    Farm.calculateCellValue = function (productId, main, farm5, farm6, farm7) {
        if (productId > 0) {
            var result = numberFormat(main);
            if (farm5 > 0) {
                result += "<br/>F5: " + numberFormat(farm5);
            }
            if (farm6 > 0) {
                result += "<br/>F6: " + numberFormat(farm6);
            }
            if (farm7 > 0) {
                result += "<br/>F7: " + numberFormat(farm7);
            }
            return result;
        }
        else {
            return numberFormat(main);
        }
    };
    Farm.createDefault = function () {
        return new Farm("FARMNAME", 0, 0, "", 1, [], [], [],[]);
    };
    return Farm;
}());
/** Name of current account */
var FARMNAME = null;
/** Index of current farm/account in 'bestand' */
var FARMNR = null;
/** Each element represents an account. */
var bestand = new Array();
function closeInfoPanel() {
    try {
        var div, div2;
        if (div = $top("infoPanel")) {
            div.setAttribute("mode", "");
            div.style.display = "none";
        }
        if (div = $top("infoPanelInner")) {
            div.innerHTML = "";
        }
        if (div = $top("multiframe")) {
            div.style.zIndex = "101";
            if ((div.style.display != "block") && (div2 = $("transp100"))) {
                div2.style.display = "none";
            }
        }
        div = null;
        div2 = null;
    }
    catch (err) {
        GM_logError("closeInfoPanel", "no parameters", err, "Error, when calling closeInfoPanel");
    }
}
/**
 * Displays the info panel.
 *
 * @param mode usually 'rackoverview'
 * @param shownTypes  e.g. '"o"', when showing oil products. Other modes: v, e, ex, z, fw1fw2fw3fw4, flfla, hr, md, alpin
 *
 */
function buildInfoPanel(mode, shownTypes) {
    if (typeof shownTypes == "undefined") {
        shownTypes = "";
    }
    var container, newtable, newthead, newtbody, newtfoot, newtr, newtd, newtd1, newdiv1, newinput;
    var div;
    if (!(div = $("infoPanel"))) {
        // infoPanel has not been created so far => create frame now
        var gardenArea = $("garten_komplett"); // Area between products & quick jump icons and post box & xp bar
        div = createElement("div", { "id": "infoPanel", "mode": "", "style": "position:absolute;top:50px;left:" + (gardenArea ? 20 : 100) + "px;width:660px;height:580px;background-color:#b8a789;z-index:100;display:none;" }, gardenArea ? gardenArea : ALL);
        createElement("img", { "src": GFX + "guild/help_back.jpg", "style": "position:absolute;top:0;left:0;width:100%;height:100%;z-index:-1;" }, div);
        createElement("div", { "id": "infoPanelInner", "style": "position:absolute;width:595px;height:89%;margin:5%;overflow:none;" }, div);
        var closeIcon = createElement("img", { "id": "infoPanelClose", "class": "link", "src": GFX + "close.jpg", "style": "position:absolute;top:8px;right:8px;width:20px;height:20px;" }, div);
        closeIcon.addEventListener("click", closeInfoPanel, false);
    }
    // Close infoPanel, when rackoverview icon is clicked while being open
    if ((div.style.zIndex == "102") && (mode == div.getAttribute("mode"))) {
        closeInfoPanel();
    }
    else {
        div.setAttribute("mode", mode);
        div.setAttribute("mode2", implode(shownTypes, "mode2"));
        div.style.display = "block";
        div.style.zIndex = "102";
        div.style.width = "800px";
        div.style.left = "-100px";
        div.style.background = "";
        div = $("infoPanelInner");
        div.innerHTML = "";
        div.style.width = "90%";
        div.style.height = "85%";
        div.style.overflow = "auto";
        div.style.background = "";
        // Multiframe is some native info box. Put it behind our infoPanel.
        $("multiframe").style.zIndex = "99";
        switch (mode) {
            case "rackoverview": {
                if (shownTypes) {
                    // Remember current shownTypes
                    GM_setValue(LNG + "_" + SERVER + "_" + FARMNAME + "_modeRackoverview", shownTypes);
                }
                else {
                    // Read shownTypes from database
                    shownTypes = GM_getValue(LNG + "_" + SERVER + "_" + FARMNAME + "_modeRackoverview", "cveoz");
                }
                /** Box containing the selectors for product categories */
                var newdiv = createElement("div", { "id": "offertypeselector", "class": "productSort", "style": "position:absolute;top:0px;left:0px;-moz-user-select:none;" }, div);
                newdiv.addEventListener("mouseover", function (event) {
                    var mouseOverText = event.target.getAttribute("mouseOverText");
                    if (mouseOverText) {
                        mouseOverText = '<div>' + getText("click") + '&nbsp;/&nbsp;' + getText("clickCtrl") + '</div><div>' + mouseOverText + '</div>';
                        toolTip.show(event, mouseOverText);
                    }
                }, false);
                // Filter plants
                /** Icon for type 'plants' */
                var newdiv1 = createElement("div", { "mouseOverText": text[LNG]["category_v"], "class": "rackcat1v", "style": "float:left;width:27px;height:39px;background:url('" + GFX + "rack_sort_top.png') repeat scroll 0px 0px transparent;" }, newdiv);
                if (shownTypes.match(/v/)) {
                    // Plants selected => green background
                    newdiv1.style.backgroundPosition = " 0px -78px";
                }
                else {
                    // Plants hidden => Add mouseover-behaviour
                    newdiv1.addEventListener("mouseout", function () {
                        this.style.backgroundPosition = " 0px 0px";
                    }, false);
                    newdiv1.addEventListener("mouseover", function () {
                        this.style.backgroundPosition = " 0px -39px";
                    }, false);
                }
                newdiv1.addEventListener("click", function (event) {
                    if (event.ctrlKey) {
                        // Ctrl pressed...
                        if (shownTypes.match(/v/)) {
                            // Plants shown => Hide them
                            shownTypes = shownTypes.replace(/v/, "");
                        }
                        else {
                            // Add plants to shown types
                            shownTypes += "v";
                        }
                    }
                    else {
                        // Show only plants
                        shownTypes = "v";
                    }
                    $("infoPanel").setAttribute("mode", "");
                    buildInfoPanel("rackoverview", shownTypes);
                }, false);
                // Filter 'fortschrittliche Produkte'
                newdiv1 = createElement("div", { "mouseOverText": text[LNG]["category_e"], "class": "link", "style": "float:left;width:27px;height:39px;background:url('" + GFX + "rack_sort_top.png') repeat scroll -27px 0px transparent;" }, newdiv);
                if (shownTypes.match(/etea/)) {
                    newdiv1.style.backgroundPosition = "-27px -78px";
                }
                else {
                    newdiv1.addEventListener("mouseout", function () {
                        this.style.backgroundPosition = "-30px 0px";
                    }, false);
                    newdiv1.addEventListener("mouseover", function () {
                        this.style.backgroundPosition = "-30px -39px";
                    }, false);
                }
                newdiv1.addEventListener("click", function (event) {
                    if (event.ctrlKey) {
                        if (shownTypes.match(/etea/)) {
                            shownTypes = shownTypes.replace(/etea/, "");
                        }
                        else {
                            shownTypes += "etea";
                        }
                    }
                    else {
                        shownTypes = "etea";
                    }
                    $("infoPanel").setAttribute("mode", "");
                    buildInfoPanel("rackoverview", shownTypes);
                }, false);
                // Filter 'exotic products'
                var styleExotic = "float:left;";
                styleExotic += "width:31px;";
                styleExotic += "height:44px;";
                styleExotic += "margin: -3px 0px 0px 0px;";
                styleExotic += "background:url('" + GFX + "rack_sort_left7.png') repeat scroll 0px -330px transparent;";
                styleExotic += "transform: scale(" + (27 / 31) + "," + (39 / 44) + ");"; // Scale 31x44 to 27x39 like other icons
                newdiv1 = createElement("div", {
                    "mouseOverText": text[LNG]["category_ex"],
                    "class": "link",
                    "style": styleExotic
                }, newdiv);
                if (shownTypes.match(/e(?=x)/)) {
                    newdiv1.style.backgroundPosition = " -72px -330px";
                }
                else {
                    newdiv1.addEventListener("mouseout", function () {
                        this.style.backgroundPosition = " 0px -330px";
                    }, false);
                    newdiv1.addEventListener("mouseover", function () {
                        this.style.backgroundPosition = " -36px -330px";
                    }, false);
                }
                newdiv1.addEventListener("click", function (event) {
                    if (event.ctrlKey) {
                        if (shownTypes.match(/e(?=x)/)) {
                            shownTypes = shownTypes.replace(/ex/, "");
                        }
                        else {
                            shownTypes += "ex";
                        }
                    }
                    else {
                        shownTypes = "ex";
                    }
                    $("infoPanel").setAttribute("mode", "");
                    buildInfoPanel("rackoverview", shownTypes);
                }, false);
                // Filter 'alpin products'
                var styleAlpin = "float:left;";
                styleAlpin += "width:31px;";
                styleAlpin += "height:44px;";
                styleAlpin += "margin: -3px 0px 0px -4px;";
                styleAlpin += "background:url('" + GFX + "rack_sort_left7.png') repeat scroll 0px 48px transparent;";
                styleAlpin += "transform: scale(" + (-27 / 31) + "," + (39 / 44) + ");"; // Scale 31x44 to 27x39 and flip icon
                newdiv1 = createElement("div", {
                    "mouseOverText": text[LNG]["category_alpin"],
                    "class": "link",
                    "style": styleAlpin
                }, newdiv);
                if (shownTypes.match(/alpin/)) {
                    newdiv1.style.backgroundPosition = " -72px 48px";
                }
                else {
                    newdiv1.addEventListener("mouseout", function () {
                        this.style.backgroundPosition = " 0px 48px";
                    }, false);
                    newdiv1.addEventListener("mouseover", function () {
                        this.style.backgroundPosition = " -36px 48px";
                    }, false);
                }
                newdiv1.addEventListener("click", function (event) {
                    if (event.ctrlKey) {
                        if (shownTypes.match(/alpin/)) {
                            shownTypes = shownTypes.replace(/alpin/, "");
                        }
                        else {
                            shownTypes += "alpin";
                        }
                    }
                    else {
                        shownTypes = "alpin";
                    }
                    $("infoPanel").setAttribute("mode", "");
                    buildInfoPanel("rackoverview", shownTypes);
                }, false);
                // Filter oil
                newdiv1 = createElement("div", { "mouseOverText": text[LNG]["category_o"], "class": "link", "style": "float:left;width:54px;height:39px;background:url('" + GFX + "rack_sort_top.png') repeat scroll -53px 0px transparent;" }, newdiv);
                if (shownTypes.match(/o(?!w)/)) {
                    newdiv1.style.backgroundPosition = "-53px -78px";
                }
                else {
                    newdiv1.addEventListener("mouseout", function () {
                        this.style.backgroundPosition = "-53px 0px";
                    }, false);
                    newdiv1.addEventListener("mouseover", function () {
                        this.style.backgroundPosition = "-53px -39px";
                    }, false);
                }
                newdiv1.addEventListener("click", function (event) {
                    if (event.ctrlKey) {
                        if (shownTypes.match(/o(?!w)/)) {
                            shownTypes = shownTypes.replace(/o(?!w)/, "");
                        }
                        else {
                            shownTypes += "o";
                        }
                    }
                    else {
                        shownTypes = "o";
                    }
                    $("infoPanel").setAttribute("mode", "");
                    buildInfoPanel("rackoverview", shownTypes);
                }, false);
                // Filter 'Baumarkt'
                newdiv1 = createElement("div", { "mouseOverText": text[LNG]["category_z"], "class": "link", "style": "float:left;width:54px;height:39px;background:url('" + GFX + "rack_sort_top.png') repeat scroll -159px 0px transparent;" }, newdiv);
                if (shownTypes.match(/z/)) {
                    newdiv1.style.backgroundPosition = "-159px -78px";
                }
                else {
                    newdiv1.addEventListener("mouseout", function () {
                        this.style.backgroundPosition = "-159px 0px";
                    }, false);
                    newdiv1.addEventListener("mouseover", function () {
                        this.style.backgroundPosition = "-159px -39px";
                    }, false);
                }
                newdiv1.addEventListener("click", function (event) {
                    if (event.ctrlKey) {
                        if (shownTypes.match(/z/)) {
                            shownTypes = shownTypes.replace(/z/, "");
                        }
                        else {
                            shownTypes += "z";
                        }
                    }
                    else {
                        shownTypes = "z";
                    }
                    $("infoPanel").setAttribute("mode", "");
                    buildInfoPanel("rackoverview", shownTypes);
                }, false);
                // Filter farmerworld
                newdiv1 = createElement("div", { "mouseOverText": text[LNG]["category_fw"], "class": "link", "style": "float:left;width:54px;height:39px;background:url('" + GFX + "rack_sort_top.png') repeat scroll -106px 0px transparent;" }, newdiv);
                if (shownTypes.match(/fw1fw2fw3fw4/)) {
                    newdiv1.style.backgroundPosition = "-106px -78px";
                }
                else {
                    newdiv1.addEventListener("mouseout", function () {
                        this.style.backgroundPosition = "-106px 0px";
                    }, false);
                    newdiv1.addEventListener("mouseover", function () {
                        this.style.backgroundPosition = "-106px -39px";
                    }, false);
                }
                newdiv1.addEventListener("click", function (event) {
                    if (event.ctrlKey) {
                        if (shownTypes.match(/fw1fw2fw3fw4/)) {
                            shownTypes = shownTypes.replace(/fw1fw2fw3fw4/, "");
                        }
                        else {
                            shownTypes += "fw1fw2fw3fw4";
                        }
                    }
                    else {
                        shownTypes = "fw1fw2fw3fw4";
                    }
                    $("infoPanel").setAttribute("mode", "");
                    buildInfoPanel("rackoverview", shownTypes);
                }, false);
                // Filter flower
                newdiv1 = createElement("div", { "mouseOverText": text[LNG]["category_fl"] + " " + text[LNG]["category_fla"], "class": "link", "style": "float:left;width:54px;height:39px;background:url('" + GFX + "rack_sort_top.png') repeat scroll -212px 0px transparent;" }, newdiv);
                if (shownTypes.match(/flfla/)) {
                    newdiv1.style.backgroundPosition = "-212px -78px";
                }
                else {
                    newdiv1.addEventListener("mouseout", function () {
                        this.style.backgroundPosition = "-212px 0px";
                    }, false);
                    newdiv1.addEventListener("mouseover", function () {
                        this.style.backgroundPosition = "-212px -39px";
                    }, false);
                }
                newdiv1.addEventListener("click", function (event) {
                    if (event.ctrlKey) {
                        if (shownTypes.match(/flfla/)) {
                            shownTypes = shownTypes.replace(/flfla/, "");
                        }
                        else {
                            shownTypes += "flfla";
                        }
                    }
                    else {
                        shownTypes = "flfla";
                    }
                    $("infoPanel").setAttribute("mode", "");
                    buildInfoPanel("rackoverview", shownTypes);
                }, false);
                // Filter herbs
                newdiv1 = createElement("div", { "mouseOverText": text[LNG]["category_hr"] + " " + text[LNG]["category_md"], "class": "link", "style": "float:left;width:27px;height:39px;background:url('" + IMAGES["racksortVeterinary"] + "') repeat scroll 0px 0px transparent;" }, newdiv);
                if (shownTypes.match(/hr/)) {
                    newdiv1.style.backgroundPosition = "0px -78px";
                }
                else {
                    newdiv1.addEventListener("mouseout", function () {
                        this.style.backgroundPosition = "0px 0px";
                    }, false);
                    newdiv1.addEventListener("mouseover", function () {
                        this.style.backgroundPosition = "0px -39px";
                    }, false);
                }
                newdiv1.addEventListener("click", function (event) {
                    if (event.ctrlKey) {
                        if (shownTypes.match(/hr/)) {
                            shownTypes = shownTypes.replace(/hr/, "");
                        }
                        else {
                            shownTypes += "hr";
                        }
                    }
                    else {
                        shownTypes = "hr";
                    }
                    $("infoPanel").setAttribute("mode", "");
                    buildInfoPanel("rackoverview", shownTypes);
                }, false);
                // Filter tinctures
                newdiv1 = createElement("div", { "mouseOverText": text[LNG]["category_md"] + " " + text[LNG]["category_md"], "class": "link", "style": "float:left;width:27px;height:39px;background:url('" + IMAGES["racksortVeterinary"] + "') repeat scroll -26px 0px transparent;" }, newdiv);
                if (shownTypes.match(/md/)) {
                    newdiv1.style.backgroundPosition = "-26px -78px";
                }
                else {
                    newdiv1.addEventListener("mouseout", function () {
                        this.style.backgroundPosition = "-26px 0px";
                    }, false);
                    newdiv1.addEventListener("mouseover", function () {
                        this.style.backgroundPosition = "-26px -39px";
                    }, false);
                }
                newdiv1.addEventListener("click", function (event) {
                    if (event.ctrlKey) {
                        if (shownTypes.match(/md/)) {
                            shownTypes = shownTypes.replace(/md/, "");
                        }
                        else {
                            shownTypes += "md";
                        }
                    }
                    else {
                        shownTypes = "md";
                    }
                    $("infoPanel").setAttribute("mode", "");
                    buildInfoPanel("rackoverview", shownTypes);
                }, false);

                //Animal breed
                newdiv1 = createElement("div", { "mouseOverText": text[LNG]["category_breed"], "class": "link", "style": "float:left;width:27px;height:39px;background:url('"+GFX+"rack_sort_left9.png') repeat scroll 0px -562px transparent;" }, newdiv);
                if (shownTypes.match(/breed/)) {
                    newdiv1.style.backgroundPosition = "-72px -562px";
                }
                else {
                    newdiv1.addEventListener("mouseout", function () {
                        this.style.backgroundPosition = "0px -562px";
                    }, false);
                    newdiv1.addEventListener("mouseover", function () {
                        this.style.backgroundPosition = "-36px -562px";
                    }, false);
                }
                newdiv1.addEventListener("click", function (event) {
                    if (event.ctrlKey) {
                        if (shownTypes.match(/breed/)) {
                            shownTypes = shownTypes.replace(/breed/, "");
                        }
                        else {
                            shownTypes += "breed";
                        }
                    }
                    else {
                        shownTypes = "breed";
                    }
                    $("infoPanel").setAttribute("mode", "");
                    buildInfoPanel("rackoverview", shownTypes);
                }, false);

                //CowRacing
                newdiv1 = createElement("div", { "mouseOverText": text[LNG]["category_cow"], "class": "link", "style": "float:left;width:27px;height:39px;background:url('"+GFX+"rack_sort_left9.png') repeat scroll 0px -656px transparent; transform:scaleX(-1);" }, newdiv);
                if (shownTypes.match(/cow/)) {
                    newdiv1.style.backgroundPosition = "-72px -656px";
                }
                else {
                    newdiv1.addEventListener("mouseout", function () {
                        this.style.backgroundPosition = "0px -656px";
                    }, false);
                    newdiv1.addEventListener("mouseover", function () {
                        this.style.backgroundPosition = "-36px -656px";
                    }, false);
                }
                newdiv1.addEventListener("click", function (event) {
                    if (event.ctrlKey) {
                        if (shownTypes.match(/cow/)) {
                            shownTypes = shownTypes.replace(/cow/, "");
                        }
                        else {
                            shownTypes += "cow";
                        }
                    }
                    else {
                        shownTypes = "cow";
                    }
                    $("infoPanel").setAttribute("mode", "");
                    buildInfoPanel("rackoverview", shownTypes);
                }, false);

                // Filter fishing
                newdiv1 = createElement("div", { "mouseOverText": text[LNG]["category_fish"], "class": "link", "style": "float:left;width:27px;height:39px;background:url('"+GFX+"rack_sort_left9.png') repeat scroll 0px -706px transparent; " }, newdiv);
                if (shownTypes.match(/fish/)) {
                    newdiv1.style.backgroundPosition = "-72px -706px";
                }
                else {
                    newdiv1.addEventListener("mouseout", function () {
                        this.style.backgroundPosition = "0px -706px";
                    }, false);
                    newdiv1.addEventListener("mouseover", function () {
                        this.style.backgroundPosition = "-36px -706px";
                    }, false);
                }
                newdiv1.addEventListener("click", function (event) {
                    if (event.ctrlKey) {
                        if (shownTypes.match(/fish/)) {
                            shownTypes = shownTypes.replace(/fish/, "");
                        }
                        else {
                            shownTypes += "fish";
                        }
                    }
                    else {
                        shownTypes = "fish";
                    }
                    $("infoPanel").setAttribute("mode", "");
                    buildInfoPanel("rackoverview", shownTypes);
                }, false);
                // Create "clear all data" button
                newtr = createElement("button", { "class": "link", "style": "float:left;margin: 13px 10px;" }, newdiv, "Clear all data");
                newtr.addEventListener("click", function () {
                    FARMNR = 0;
                    bestand = [Farm.createDefault()];
                    bestand[FARMNR].name = FARMNAME;
                    for (var v = 0; v < unsafeData.prodName[0].length; v++) {
                        bestand[FARMNR].farmMain[v] = -1;
                        bestand[FARMNR].farm5[v] = -1;
                        bestand[FARMNR].farm6[v] = -1;
                        bestand[FARMNR].farm7[v] = -1;
                    }
                    GM_setValue(LNG + "_" + SERVER + "_rackoverview", implode(bestand, "bestand"));
                    closeInfoPanel();
                }, false);
                /** Table within the rack is built up */
                var newtable = createElement("table", { "border": "1", "height": "500px", "style": "position:absolute;top:50px;left:0px;-moz-user-select:none;" }, div);
                // Top left cell is empty
                var newtr = createElement("tr", {}, newtable);
                var newtd = createElement("td", {}, newtr);
                // Create a cell in first row for each account (with the name)
                for (var farm = 0; farm < bestand.length; farm++) {
                    createElement("td", { "style": "text-align:center;" + (FARMNR == farm ? "background-color:#CCCCFF;" : "") }, newtr, bestand[farm].name);
                }
                // Add sigma for 'sum' column
                if (bestand.length > 1) {
                    createElement("td", { "id": "moeZumFinden", "style": "text-align:center;" }, newtr, "\u03A3");
                }
                // Create row 'Geld'
                newtr = createElement("tr", {}, newtable);
                newtd = createElement("td", {}, newtr, unsafeWindow.t_money);
                var sumMoney = 0;
                for (var farm = 0; farm < bestand.length; farm++) {
                    sumMoney += bestand[farm].money;
                    createElement("td", { "style": "text-align:right;" + (FARMNR == farm ? "background-color:#CCCCFF;" : "") }, newtr, moneyFormatInt(bestand[farm].money));
                }
                if (bestand.length > 1) {
                    createElement("td", { "style": "text-align:right;" }, newtr, moneyFormatInt(sumMoney));
                }
                // Create row 'Punkte'
                newtr = createElement("tr", {}, newtable);
                newtd = createElement("td", {}, newtr, unsafeWindow.t_points);
                for (var farm = 0; farm < bestand.length; farm++) {
                    createElement("td", { "style": "text-align:right;" + (FARMNR == farm ? "background-color:#CCCCFF;" : "") }, newtr, numberFormat(bestand[farm].points));
                }
                if (bestand.length > 1) {
                    createElement("td", { "style": "text-align:right;" }, newtr, "");
                }
                // Create row 'Level'
                newtr = createElement("tr", {}, newtable);
                newtd = createElement("td", {}, newtr, unsafeWindow.guildquestlist_level.replace(/:/, ""));
                for (var farm = 0; farm < bestand.length; farm++) {
                    createElement("td", { "style": "text-align:right;" + (FARMNR == farm ? "background-color:#CCCCFF;" : "") }, newtr, numberFormat(bestand[farm].level));
                }
                if (bestand.length > 1) {
                    createElement("td", { "style": "text-align:right;" }, newtr, "");
                }
                // Create row 'premium'
                newtr = createElement("tr", {}, newtable);
                newtd = createElement("td", {}, newtr, unsafeWindow.lng_t_premium);
                for (var farm = 0; farm < bestand.length; farm++) {
                    createElement("td", { "style": "text-align:right;" + (FARMNR == farm ? "background-color:#CCCCFF;" : "") }, newtr, bestand[farm].premium);
                }
                if (bestand.length > 1) {
                    createElement("td", { "style": "text-align:right;" }, newtr, "");
                }
                /** product type of the last created row, like 'c' (for coins) */
                var oldType = "c"; // First row is coins
                shownTypes += oldType;
                var zCount = 0; // Counter for formatting every even number
                for (var v = 0; v < unsafeData.prodNameSort[0].length; v++) {
                    /** a product id */
                    var w = unsafeData.prodNameSort[0][v];
                    var showProduct = false;
                    // Step 1: Should product w be shown?
                    for (var farm = 0; farm < bestand.length; farm++) {
                        //var regEx_prodTyp = (unsafeData.prodTyp[0][w] == "e" ? "e(?!x)" : unsafeData.prodTyp[0][w]);
                        var regEx_prodTyp=unsafeData.prodTyp[0][w];

                        if (unsafeData.prodTyp[0][w] == "e") {
                            regEx_prodTyp = /e[^edx]/;
                        } else if(unsafeData.prodTyp[0][w] == "o"){
                            regEx_prodTyp = /o[^w]/;
                        } else {
                            regEx_prodTyp = unsafeData.prodTyp[0][w];
                        }

                        if ((!showProduct) && (shownTypes.match(regEx_prodTyp))) {
                            if ((bestand[farm].farmMain[w] > -1) || (bestand[farm].farm5[w] > -1) || (bestand[farm].farm6[w] > -1) || (bestand[farm].farm7[w] > -1)) {
                                // At least one account has product w enabled
                                showProduct = true;
                                break;
                            }
                        }
                    }
                    if (showProduct) {
                        zCount++;
                        if (oldType != unsafeData.prodTyp[0][w]) {
                            // Product w has another type than its predecessor => create an empty placeholder row
                            createElement("td", { "colspan": bestand.length + 3 }, createElement("tr", {}, newtable));
                            oldType = unsafeData.prodTyp[0][w];
                        }
                        newtr = createElement("tr", {}, newtable);
                        newtd = createElement("td", { "style": (zCount % 2 == 0 ? "background-color:#eeeeee;" : "") }, newtr);
                        produktPic(0, w, newtd);
                        createElement("span", { "id": w }, newtd, unsafeData.prodName[0][w]);
                        var sumMainFarm = 0;
                        var sumOfFarm5 = 0;
                        var sumOfFarm6 = 0;
                        var sumOfFarm7 = 0;
                        for (var farm = 0; farm < bestand.length; farm++) {
                            var f = bestand[farm];
                            try {
                                if (bestand[farm].farmMain[w] > -1) {
                                    sumMainFarm += bestand[farm].farmMain[w];
                                    sumOfFarm5 += bestand[farm].farm5[w];
                                    sumOfFarm6 += bestand[farm].farm6[w];
                                    sumOfFarm7 += bestand[farm].farm7[w];
                                    createElement("td", { "style": "text-align:right;" + (FARMNR == farm ? "background-color:#CCCCFF;" : (zCount % 2 == 0 ? "background-color:#eeeeee;" : "")) }, newtr, bestand[farm].getCellValue(w));
                                }
                                else {
                                    // Product 'w' not yet unlocked on account 'farm'
                                    createElement("td", { "style": "text-align:right;" + (FARMNR == farm ? "background-color:#CCCCFF;" : (zCount % 2 == 0 ? "background-color:#eeeeee;" : "")) }, newtr, "--");
                                }
                            }
                            catch (e) {
                                GM_logError("buildInfopanel", "rackoverview", "=" + farm + ", f=" + f, e);
                            }
                        }
                        if (bestand.length > 1) {
                            createElement("td", { "style": "text-align:right;" + (FARMNR == farm ? "background-color:#CCCCFF;" : (zCount % 2 == 0 ? "background-color:#eeeeee;" : "")) }, newtr, Farm.calculateCellValue(w, sumMainFarm, sumOfFarm5, sumOfFarm6, sumOfFarm7));
                        }
                    }
                }
                newtable = null;
                newtr = null;
                newtd = null;
                newdiv = null;
                newdiv1 = null;
                break;
            }
            default:
                break;
        }
    }
    div = null;
} // end buildinfo
var LNG = "";
function do_main() {
    if (top.unsafeData.text == undefined) {
        top.unsafeData.text = text;
    }
    else {
        text = top.unsafeData.text;
    }
    LNG = unsafeData.LANGUAGE; // e.g. "de"
    COUNTRY = unsafeData.COUNTRY; // e.g. "DE"
    SERVER = (new RegExp("s(\\d+)\\." + GAMEPAGES[COUNTRY].replace(/\./g, "\\."), "i").exec(location.hostname))[1];
    PAGE = location.pathname.replace(/^\//, "").replace(/\.php.*$/, "");
    delimThou = unsafeData.delimThou;
    switch (LNG) {
        case "au":
        case "nz":
        case "uk":
        case "us": {
            if (top.unsafeData.text["en"]["rackoverview"] == undefined) {
                text["en"]["rackoverview"] = new Object();
                text["en"]["rackoverview"]["msgUpdate"] = "There is a new script version of rackoverview availible. Install?";
                text["en"]["rackoverview"]["shouldUpdateBerater"] = "You should update the script of the Adviser!<br>The Rackoverview-Script will not run properly.";
            }
            break;
        }
        case "bu": {
            text["rackoverview"]["msgUpdate"] = "There is a new script version of rackoverview availible. Install?";
            text["rackoverview"]["shouldUpdateBerater"] = "You should update the script of the Adviser!<br>The Rackoverview-Script will not run properly.";
            break;
        }
        case "de": {
            if (top.unsafeData.text["de"]["rackoverview"] == undefined) {
                text["de"]["rackoverview"] = new Object();
                text["de"]["rackoverview"]["msgUpdate"] = "Es liegt eine neue Script-Version für den Rackoverview vor. Diese installieren?";
                text["de"]["rackoverview"]["shouldUpdateBerater"] = "Du solltest das Berater-Script aktualisieren!<br>Der Rackoverview-Script wird nicht ordnungsgemaess arbeiten.";
            }
            break;
        }
        case "dk": {
            if (top.unsafeData.text["dk"]["rackoverview"] == undefined) {
                text["dk"]["rackoverview"] = new Object();
                text["dk"]["rackoverview"]["msgUpdate"] = "There is a new script version of rackoverview availible. Install?";
                text["dk"]["rackoverview"]["shouldUpdateBerater"] = "You should update the script of the Adviser!<br>The Rackoverview-Script will not run properly.";
            }
            break;
        }
        case "es": {
            if (top.unsafeData.text["es"]["rackoverview"] == undefined) {
                text["es"]["rackoverview"] = new Object();
                text["es"]["rackoverview"]["msgUpdate"] = "Hay una nueva versión de la escritura de rackoverview dotados . Instale ?";
                text["es"]["rackoverview"]["shouldUpdateBerater"] = "Debe actualizar el guión de la Asesora ! The Script Rackoverview no se ejecutará correctamente.";
            }
            break;
        }
        case "fr": {
            if (top.unsafeData.text["fr"]["rackoverview"] == undefined) {
                text["fr"]["rackoverview"] = new Object();
                text["fr"]["rackoverview"]["msgUpdate"] = "Il est une nouvelle version du script rackoverview macadamia . Installez ?";
                text["fr"]["rackoverview"]["shouldUpdateBerater"] = "Vous devez mettre à jour le script de la Conseillère ! The Script Rackoverview ne fonctionnera pas correctement .";
            }
            break;
        }
        case "gr": {
            text["rackoverview"]["msgUpdate"] = "There is a new script version of rackoverview availible. Install?";
            text["rackoverview"]["shouldUpdateBerater"] = "You should update the script of the Adviser!<br>The Rackoverview-Script will not run properly.";
            break;
        }
        case "hu": {
            text["rackoverview"]["msgUpdate"] = "There is a new script version of rackoverview availible. Install?";
            text["rackoverview"]["shouldUpdateBerater"] = "You should update the script of the Adviser!<br>The Rackoverview-Script will not run properly.";
            break;
        }
        case "it": {
            text["rackoverview"]["msgUpdate"] = "There is a new script version of rackoverview availible. Install?";
            text["rackoverview"]["shouldUpdateBerater"] = "You should update the script of the Adviser!<br>The Rackoverview-Script will not run properly.";
            break;
        }
        case "nl": {
            if (top.unsafeData.text["nl"]["rackoverview"] == undefined) {
                text["nl"]["rackoverview"] = new Object();
                text["nl"]["rackoverview"]["msgUpdate"] = "Wil je de nieuwe script versie van rackoverview installeren?";
                text["nl"]["rackoverview"]["shouldUpdateBerater"] = "You should update the script of the Adviser!<br>The Rackoverview-Script will not run properly.";
            }
            break;
        }
        case "pl": {
            if (top.unsafeData.text["pl"]["rackoverview"] == undefined) {
                text["pl"]["rackoverview"] = new Object();
                text["pl"]["rackoverview"]["msgUpdate"] = "Jest to nowa wersja skryptu z rackoverview availible . Zainstalować?";
                text["pl"]["rackoverview"]["shouldUpdateBerater"] = "Należy zaktualizować skrypt doradcy ! Rackoverview skrypt nie będzie działał poprawnie .";
            }
            break;
        }
        case "ru": {
            if (top.unsafeData.text["ru"]["rackoverview"] == undefined) {
                text["ru"]["rackoverview"] = new Object();
                text["ru"]["rackoverview"]["msgUpdate"] = "Există o nouă versiune a script rackoverview availible . Instalați ?";
                text["ru"]["rackoverview"]["shouldUpdateBerater"] = "Tu ar trebui să actualizeze scenariul consilierului ! Rackoverview Script nu va rula în mod corespunzător .";
            }
            break;
        }
        case "se": {
            text["rackoverview"]["msgUpdate"] = "There is a new script version of rackoverview availible. Install?";
            text["rackoverview"]["shouldUpdateBerater"] = "You should update the script of the Adviser!<br>The Rackoverview-Script will not run properly.";
            break;
        }
        case "tr": {
            text["rackoverview"]["msgUpdate"] = "There is a new script version of rackoverview availible. Install?";
            text["rackoverview"]["shouldUpdateBerater"] = "You should update the script of the Adviser!<br>The Rackoverview-Script will not run properly.";
            break;
        }
    }
    // Check for update
    if ((!unsafeData.beraterVersion) || (compareVersions(neededVersionBeraterForRack, unsafeData.beraterVersion) > 0)) {
        alert2(text[LNG]["rackoverview"]["shouldUpdateBerater"], text["ok"]);
    }
    // time, version on server, last checked version
    var updateCheck = explode(GM_getValue("updateCheck"), "do_main/updateCheck", [0, VERSION, VERSION]);
    FARMNAME = $("username").innerHTML;
    // Note: explodedBestand contains only objects with the same attributes like a Farm-object. We need to convert into proper Farm-instances for using methods.
    var explodedBestand = explode(GM_getValue(LNG + "_" + SERVER + "_rackoverview"), "bestand", []);
    bestand = [];
    if (explodedBestand instanceof Array) {
        for (var i = 0; i < explodedBestand.length; i++) {
            var f = explodedBestand[i];
            if (!('name' in f)) {
                // Current f doesn't have attribute 'name' => Not a farm => skip it
                continue;
            }
            // Did we find the index of the current account...
            if (f.name == FARMNAME) {
                if (FARMNR == null) {
                    FARMNR = i; // ... remember it in FARMNR.
                }
                else {
                    // We already found the matching item in 'explodedBestand' (in a lower index) => Get lost of this one.
                    continue;
                }
            }
            bestand.push(new Farm(f.name, f.money, f.points, f.premium, f.level, f.farmMain, f.farm5, f.farm6, f.farm7));
        }
    }
    if (FARMNR == null) {
        // No item for current account found in 'bestand' => Create one
        FARMNR = bestand.length;
        bestand.push(Farm.createDefault());
        bestand[FARMNR].name = FARMNAME;
        for (var productId_1 = 0; productId_1 < unsafeData.prodName[0].length; productId_1++) {
            bestand[FARMNR].farmMain[productId_1] = -1;
            bestand[FARMNR].farm5[productId_1] = -1;
            bestand[FARMNR].farm6[productId_1] = -1;
            bestand[FARMNR].farm7[productId_1] = -1;
        }
        GM_setValue(LNG + "_" + SERVER + "_rackoverview", implode(bestand, "bestand"));
    }
    else {
        // FARMNR has been successfully set => Check (and correct if necessary) the product attributes of main farm, farm5 and farm6.
        if (!(bestand[FARMNR].farmMain instanceof Array)) {
            bestand[FARMNR].farmMain = [];
            for (var productId = 0; productId < unsafeData.prodName[0].length; productId++) {
                bestand[FARMNR].farmMain[productId] = -1;
            }
        }
        if (!(bestand[FARMNR].farm5 instanceof Array)) {
            bestand[FARMNR].farm5 = [];
            for (var productId = 0; productId < unsafeData.prodName[0].length; productId++) {
                bestand[FARMNR].farm5[productId] = -1;
            }
        }
        if (!(bestand[FARMNR].farm6 instanceof Array)) {
            bestand[FARMNR].farm6 = [];
            for (var productId = 0; productId < unsafeData.prodName[0].length; productId++) {
                bestand[FARMNR].farm6[productId] = -1;
            }
        }
        if (!(bestand[FARMNR].farm7 instanceof Array)) {
            bestand[FARMNR].farm7 = [];
            for (var productId = 0; productId < unsafeData.prodName[0].length; productId++) {
                bestand[FARMNR].farm7[productId] = -1;
            }
        }
    }
    document.addEventListener("gameUpdateRack", function () {
        try {
            // Money, e.g. "4.698.559,85 kT"
            var money = $("bar").innerHTML;
            bestand[FARMNR].money = parseInt(money.split(delimThou).join(""), 10);
            // Points
            var points = $("pkt").innerHTML;
            bestand[FARMNR].points = parseInt(points.split(delimThou).join(""), 10);
            // Level
            var level = $("levelnum").innerHTML;
            bestand[FARMNR].level = parseInt(level, 10);
            // Premium
            var premiumEndtime = $("premium_endtime");
            if (premiumEndtime) {
                bestand[FARMNR].premium = premiumEndtime.innerHTML.split(",")[0];
            }
            else {
                bestand[FARMNR].premium = "---";
            }
            // Coins
            var coins = $("coins").innerHTML;
            bestand[FARMNR].farmMain[0] = parseInt(coins.split(delimThou).join(""), 10);
            // Copy data from prodStock
            for (var v_1 = 1; v_1 < unsafeData.prodName[0].length; v_1++) {
                if (unsafeData.prodName[0][v_1] == undefined) {
                    continue;
                }
                if (unsafeData.prodBlock[0][v_1].match(/l/)) {
                    bestand[FARMNR].farmMain[v_1] = -1;
                    bestand[FARMNR].farm5[v_1] = -1;
                    bestand[FARMNR].farm6[v_1] = -1;
                    bestand[FARMNR].farm7[v_1] = -1;
                }
                else {
                    bestand[FARMNR].farmMain[v_1] = (unsafeData.prodStock[0][v_1] ? unsafeData.prodStock[0][v_1] : 0);
                    bestand[FARMNR].farm5[v_1] = (unsafeData.prodStock[5][v_1] ? unsafeData.prodStock[5][v_1] : 0);
                    bestand[FARMNR].farm6[v_1] = (unsafeData.prodStock[6][v_1] ? unsafeData.prodStock[6][v_1] : 0);
                    bestand[FARMNR].farm7[v_1] = (unsafeData.prodStock[7][v_1] ? unsafeData.prodStock[7][v_1] : 0);
                }
            }
            GM_setValue(LNG + "_" + SERVER + "_rackoverview", implode(bestand, "bestand"));
        }
        catch (err) {
            GM_logError("gameUpdateRack\n" + err);
        }
    }, false);
    // Raise "Update Event" every 2 seconds
    window.setTimeout(function () {
        raiseEvent("gameUpdateRack");
    }, 2000);
    // Hang icon for rackoverview into buttons div created by berater
    var newdiv = createElement("div", { "id": "divBeraterButtonsRackOverview", "mouseOverText": "Rack Overview", "class": "link beraterButtonIcon hoverBgRed" }, $("divBeraterButtons"));
    createElement("img", { "src": GFX + "lager/sack1.png", "style": "position:relative;top:4px;left:1px;width:22px;height:22px;" }, newdiv);
    newdiv.addEventListener("click", function () {
        buildInfoPanel("rackoverview");
    }, false);
    newdiv = null;
}
// init script
window.addEventListener("load", function () {
    if (unsafeData.beraterDone) {
        do_main();
    }
    else {
        var x = function () {
            do_main();
            document.removeEventListener("beraterDone", x, false);
        };
        document.addEventListener("beraterDone", x, false);
    }
}, false);
