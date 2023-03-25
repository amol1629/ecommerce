const express = require("express");

const {
  insertNewCustomer,
  showAllCustomerDetails,
  getCustomerById,
  updateCustomerById,
  deleteCustomerById,
  deleteAllCustomers,
  getCustomerByEmail,
} = require("../customerServices/customerServices");

// get all customers
/**
 *
 * @param {*} req
 * @param {*} res
 */
const getAllCustomersDetails = async (req, res) => {
  try {
    const result = await showAllCustomerDetails();

    console.log(result);

    res.send(JSON.stringify(result));
  } catch (error) {
    res.status(400).json(error);
  }
};

// get single customer by id
/**
 *
 * @param {*} req
 * @param {*} res
 */
// const getSingleCustomerById = async (req, res) => {
//   const id = req.params.id;

//   try {
//     const result = await getCustomerById(id);

//     console.log(result);

//     return res.send(JSON.stringify(result));
//   } catch (error) {
//     console.log(error);
//     return res.status(400).json(error);
//   }
// };

const getSingleCustomerById = async (req, res) => {
  try {
    const result = await getCustomerById(req.params.id);

    console.log(
      `Details of customer having id : ${req.params.id} ----> ${result}`
    );

    return res.send(JSON.stringify(result));
  } catch (error) {
    console.log("Error while fetching single customer by its id.");
    return res.status(400).json({
      error: `Error while fetching the details of customer having id ${req.params.id}`,
    });
  }
};

// get single customer by email
/**
 *
 * @param {*} req
 * @param {*} res
 */
const getSingleCustomerByEmail = async (req, res) => {
  const customerEmail = req.params.customerEmail;
  console.log(customerEmail);

  try {
    const result = await getCustomerByEmail(customerEmail);

    console.log(result);

    result === null
      ? res.send(JSON.stringify("No User Found"))
      : res.send(JSON.stringify(result));
  } catch (error) {
    res.status(400).json(error);
  }
};

// insert new customer
/**
 *
 * @param {*} req
 * @param {*} res
 */
const insertANewCustomer = async (req, res) => {
  const {
    customerFirstName,
    customerLastName,
    customerPhone,
    customerEmail,
    customerPassword,
    customerAddress,
  } = req.body;

  try {
    const result = await insertNewCustomer(
      customerFirstName,
      customerLastName,
      customerPhone,
      customerEmail,
      customerPassword,
      customerAddress
    );

    console.log(result);

    res.send(JSON.stringify(result));
  } catch (error) {
    res.status(400).json(error);
  }
};

// update a single customer by id
/**
 *
 * @param {*} req
 * @param {*} res
 */
const updateSingleCustomerById = async (req, res) => {
  const id = req.params.id;

  const {
    customerFirstName,
    customerLastName,
    customerPhone,
    customerEmail,
    customerPassword,
    customerAddress,
  } = req.body;

  try {
    const result = await updateCustomerById(
      id,
      customerFirstName,
      customerLastName,
      customerPhone,
      customerEmail,
      customerPassword,
      customerAddress
    );

    console.log(result);

    return res.send(JSON.stringify(result));
  } catch (error) {
    return res.status(400).json(error);
  }
};

// delete a single customer by id
/**
 *
 * @param {*} req
 * @param {*} res
 */
const deleteSingleCustomerById = async (req, res) => {
  const id = req.params.id;

  try {
    const result = await deleteCustomerById(id);

    console.log(result);

    res.send(JSON.stringify(result));
  } catch (error) {
    res.status(400).json(error);
  }
};

// delete all customers from record :
/**
 *
 * @param {*} req
 * @param {*} res
 */
const deleteAllCustomersFromRecord = async (req, res) => {
  try {
    const result = await deleteAllCustomers();

    console.log(result);

    res.send(JSON.stringify(result));
  } catch (error) {
    res.status(400).json(error);
  }
};

module.exports = {
  getAllCustomersDetails,
  insertANewCustomer,
  getSingleCustomerById,
  updateSingleCustomerById,
  deleteSingleCustomerById,
  deleteAllCustomersFromRecord,
  getSingleCustomerByEmail,
};
