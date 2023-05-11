const Project = require('../models/project');
module.exports.home = async function (req, res) {
  try {
    let projects = await Project.find({}).sort('-createdAt');
    console.log(projects);
    return res.render('home', {
      title: 'Issue Tracker | Home',
      projects : projects,
    });
  } catch {
    console.log('Error', err);
    return;
  }
};
