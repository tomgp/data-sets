# Data Sets

When you're learning to visualize data it can be a struggle to find clean data sets.This small collection is to help get started.

Each set lives in it's own directory with at least a [YAML](https://en.wikipedia.org/wiki/YAML) file and a .csv or .tsv file or sometimes a .json file.

The focus is on collecting simple tabular data sets for use with [D3](https://d3js.org/), also some geographic shapes.

## Loading CSV data in D3 (v5)

```
d3.csv('my-data-file.csv')
  .then((data)=>{
    console.log('your data is now available as an array of objects, one for each row of the CSV...');
    console.log(data);
  })
```

## YAML conventions

I'm using some conventions for fields in the YAML file hopefully they're pretty self explanatory.
`Source`, and `title` are pretty important
```
title:
source:
sourceURL:
dateRetrieved:
datePublished:
dateCollected:
methodology:
```

## Contributing

More data sets sought and welcomed! If you have any data sets you think would fit here you can either fork this repository and make a pull request or if that doesn't make any sense you can get in contact either via this site or [tweet at me](https://www.twitter.com/tomp)
