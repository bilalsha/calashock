import router from '../router';
import { ProductController } from '../../controller/product.controller';

router.get('/products', ProductController.list);
router.get('/products/categories', ProductController.listCategories);
router.get('/products/category/:id', ProductController.byCategory);

export default router;
