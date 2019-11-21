#Process Documentation
1. Dependencies:
  cors.js: Cross origin resource sharing. It helps to make api accessable across domain.
  fs.js: This is a filestream library to access/modiy the file from local machine. It is used to save the read csv file that machine.
  csv-parser: This is ued to parse csv file and convert it to json object.
2. Server.js run the node server on port 5000 by default and can be configured by changing port variable.
3. In this we parse the csv file once the server starts and create a map of "key" as hdi and "value" as json object for all entries from csv.
4. For every GET/POST request it acces the hdi key from request and looks inside the map and server the value for corresponding key. 

#API 
methods: GET
  url: http://localhost:5000/api/[hdi]
  output format: {
    data: {
      hdi,
      chunk,
      has_space
    }
  }

methods: POST
url: http://localhost:5000/api/
  input format: {
    hdi: [value]
  }
  output format: {
    data: {
      hdi,
      chunk,
      has_space
    }
  }



#Getting started (Installation)
1. Install Node.Js
2. Go to root of the directory
3. Install Dependencies: 'npm install'
4. Start by executing: 'npm start' 