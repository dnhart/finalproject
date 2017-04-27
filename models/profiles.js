var mongoose = require("mongoose");

var Schema = mongoose.Schema;

var ProfileSchema = new Schema({
// name: {
//   type: String
// },
// given_name:{
//   type: String
// },
email:{
  type: String
},
// picture:{
//   type: String
// },
clientID:{
  type: String
},
// phone:{
//   type: String
// },
// city:{
//   type: String
// },
// state:{
//   type: String
// },

jobs:[{  
  jobtitle: {
    type: String
  },
  company: {
    type: Date
  },
  formattedLocation: {
    type: String
  },
  date: {
    type: String
  },
  snippet: {
    type: String
  },
  url: {
    type: String
  },
  latitude: {
    type: String
  },
  longitude: {
    type: String
  },
  jobkey: {
    type: String
  },
  status:{
    pendingApply:{
      date: Date,
      done:{type: Boolean, default: true}
    },
    applied:{
      date: Date,
      done:{type: Boolean, default: false}
    },
    interviewScheduled:{
      date: Date,
      done:{type: Boolean, default: false}
    },
    interviewComplete:{
      date: Date,
      done:{type: Boolean, default: false}
    },
    callbackInterview:[{
      date: Date,
      done:{type: Boolean, default: false}
    }],
    callbackDone:[{
      date: Date,
      done:{type: Boolean, default: false}
    }],
    hired:{
      date: Date,
      done:{type: Boolean, default: false}
    }
  },
  notes:{
    note: [{
      date: Date,
      text: String}]
  },
  contacts: {
    contact:[{
      name: String,
      phone: String,
      email: String }]
  }
}]
});

var Profile = mongoose.model("Profile", ProfileSchema);
module.exports = Profile;


// jobtitle
// company
// formattedLocation
// date
// snippet
// url
// latitude
// longitude
// jobkey
// formattedRelativeTime