import express from "express";
import db from "../db/conn.mjs";
import { ObjectId } from "mongodb";

const router = express.Router();

// Get a list of 50 posts
router.get("/", async (req, res) => {

});

// Fetches the latest posts
router.get("/latest", async (req, res) => {

});

// Get a single post
router.get("/:id", async (req, res) => {

});

// Add a new document to the collection
router.post("/", async (req, res) => {

});

// Update the post with a new comment
router.patch("/comment/:id", async (req, res) => {

});

// Delete an entry
router.delete("/:id", async (req, res) => {

});

export default router;
