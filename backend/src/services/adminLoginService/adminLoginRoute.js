const express = require("express");

const {
  insertNewAdmin,
  searchAdminByEmail,
} = require("../adminLoginService/adminLoginServices");

/**
 *
 * @param {req} sends request to the server
 * @param {res} gets response from server
 * @returns new admin details
 */
const insertNewAdminInRecords = async (req, res) => {
  let { email, password } = req.body;

  try {
    const result = await insertNewAdmin(email, password);

    console.log(result);

    res.send(JSON.stringify(result));
  } catch (error) {
    console.log(error);
    return res.status(400).json(error);
  }
};

/**
 *
 * @param {*} req
 * @param {*} res
 * @returns
 */
const getAdminByEmail = async (req, res) => {
  const email = req.params.email;
  try {
    const result = await searchAdminByEmail(email);

    // Write status code here
    result === null
      ? res.send(JSON.stringify("No Admin Found"))
      : res.send(JSON.stringify(result));

    console.log(result);
  } catch (error) {
    console.log(error);
    return res.status(400).json(error);
  }
};

module.exports = {
  insertNewAdminInRecords,
  getAdminByEmail,
};
