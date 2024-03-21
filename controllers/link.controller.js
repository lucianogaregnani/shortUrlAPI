import { Link } from "../models";

export const getAll = async (res, req) => {
  try {
    const links = Link.findById(req);
  } catch (error) {}
};

export const getByShortLink = (req, res) => {};

export const createLink = (req, res) => {};

export const updateLink = (req, res) => {};

export const removeLink = (req, res) => {};
