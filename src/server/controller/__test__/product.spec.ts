import app from '../../app';
import request from 'supertest';
import { StatusCodes } from 'http-status-codes';

beforeAll(() => jest.useFakeTimers());

describe('ProductController', () => {
  describe('List products', () => {
    test('should list all products', async () => {
      const response = await request(app).get('/api/products');
      expect(response.statusCode).toBe(StatusCodes.OK);
      expect(response.body.total).toBe(100);
    });

    test('should list all products with pagination', async () => {
      const response = await request(app).get('/api/products?skip=10');
      expect(response.statusCode).toBe(StatusCodes.OK);
    });
  });

  describe('create products', () => {
    test('should throw 405 as method not allowed', async () => {
      const response = await request(app).post('/api/products');
      expect(response.statusCode).toBe(StatusCodes.METHOD_NOT_ALLOWED);
    });

    test('should throw 405 for unknown path', async () => {
      const response = await request(app).post('/api/category');
      expect(response.statusCode).toBe(StatusCodes.METHOD_NOT_ALLOWED);
    });
  });

  describe('List Categories', () => {
    test('should list all categories', async () => {
      const response = await request(app).get('/api/products/categories');
      expect(response.statusCode).toBe(StatusCodes.OK);
    }),
      test('should list product by category', async () => {
        const response = await request(app).get(
          '/api/products/category/smartphones'
        );
        expect(response.statusCode).toBe(StatusCodes.OK);
        expect(response.body.limit).toBe(5);
      });
  });
});
