package nexacro.shop.service.product;

import java.util.List;
import java.util.Map;

import nexacro.shop.vo.product.ProductVO;

public interface ProductService {
	public List<ProductVO> getProductList(Map<String, String> productMap);
}
