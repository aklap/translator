# translator
--
Translator is an app to explore OCR, or "optical character recognition." It grew out of the toy react app that I previously made, billSplit. I originally wanted to have an app where I could take a picture of a bill, parse the text and dollar amounts.

Instead, Translator accepts images as JPEG, PNF and TIFF, converts the image to text, then takes the text and translates it into the language of your choice via an API. That's the theory.  

What I Used
--
I ended up using node.js for the server, JavaScript, and a library for OCR that I found randomly trawling through GitHub, called [OCRAD.js](https://github.com/antimatter15/ocrad.js/). I will probably use Yandex (the same Yandex of DuckDuckGo) for translation. 

Thoughts
--
I spent hours trying to find a suitable OCR library in a language that I knew and then trying to find one with decent documentation that had been maintained. Most of the libraries look like they havent been updated in at least 7 months to a year. OCRAD seemed like it was the well known/reliable of the bunch.

One thing that helped me was Iris Classon's tutorial and [blog post](http://irisclasson.com/category/optical-character-recognition/). *Note: most of the material I found is dated; this blog post is from 2014 so ymmv, (your mileage may vary).

Even with that tutorial, with the paucity of documentation on OCR it took lots of trial and error to get it to work correctly.

Issues with OCR
--
- There are generally only two OCR engines that most OCR libraries regardless of language utilize: Tesseract and GOCR (I think stands for Google OCR). 
- They're both finicky. Any color other than white results in an empty string. Only certain fonts (think bolded Helvetica) can be read accurately.

It does make me wonder how apps like check deposit apps using your smartphone camera can convert handwriting and text so quickly and accurately. 

Future Features
--
- The ability to translate the image-as-string into the language of your choice.
- The ability to share you text via social media. 

