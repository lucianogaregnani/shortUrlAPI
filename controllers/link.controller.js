import { nanoid } from "nanoid";
import { Link } from "../models/Link.js";
import { validateUrl } from "../utils/validateUrl.js";

export const getAll = async (req, res) => {
  try {
    const links = await Link.find({ user: req.uid });

    if (!links) return res.status(200).json([]);

    return res.status(200).json(links);
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

export const getByShortLink = async (req, res) => {
  try {
    const { shortLink } = req.params;
    const link = await Link.findOne({ shortLink });

    if (!link) throw new Error("The link don't exist");

    return res.status(200).json(link);
  } catch (error) {
    return res.status(404).json({ error: error.message });
  }
};

export const createLink = async (req, res) => {
  try {
    const { longLink } = req.body;

    if (!validateUrl(longLink)) throw new Error("Invalid link");

    const link = new Link({
      longLink,
      shortLink: nanoid(6),
      user: req.uid,
    });

    await link.save();

    return res.status(200).json(link);
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

export const updateLink = async (req, res) => {
  try {
    const { longLink } = req.body;
    const { id } = req.params;

    if (!validateUrl(longLink)) throw new Error("Invalid link");

    let link = await Link.findById(id);

    if (!link) throw new Error("The link don't exist");
    if (!link.user.equals(req.uid)) throw new Error("Unauthorized");

    link.longLink = longLink;

    await link.save();

    return res.status(200).json({ modified: true });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

export const removeLink = async (req, res) => {
  try {
    const { id } = req.params;

    const link = await Link.findById(id);

    if (!link) throw new Error("The link don't exist");
    if (!link.user.equals(req.uid)) throw new Error("Unauthorized");

    await Link.findByIdAndDelete(req.params.id);

    return res.status(200).json(link);
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};
