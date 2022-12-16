import axios from 'axios';
import { Request, Response } from 'express';
import { StatusCodes } from 'http-status-codes';
import { config } from '../config';

const list = async (req: Request, res: Response): Promise<Response> => {
  const skip = req.query.skip || 0;
  const limit = req.query.limit || 10;
  const response = await axios.get(
    config.dummyUrl + `/products?limit=${limit}&skip=${skip}`
  );
  return res.status(StatusCodes.OK).json(response.data);
};

const listCategories = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const response = await axios.get(config.dummyUrl + `/products/categories`);
  return res.status(StatusCodes.OK).json(response.data);
};

const byCategory = async (req: Request, res: Response): Promise<Response> => {
  const skip = req.query.skip || 0;
  const limit = req.query.limit || 10;
  const response = await axios.get(
    config.dummyUrl +
      `/products/category/${req.params.id}?limit=${limit}&skip=${skip}`
  );
  return res.status(StatusCodes.OK).json(response.data);
};

export const ProductController = {
  list,
  listCategories,
  byCategory,
};
