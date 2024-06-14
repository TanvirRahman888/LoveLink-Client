import useWishList from "../Hooks/useWishList";


const WishList = () => {
    const [wishListData]=useWishList();
    console.log(wishListData);
    return (
        <div>
           wishListData {wishListData.length}
        </div>
    );
};

export default WishList;