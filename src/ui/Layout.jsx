

const Layout = (props) => {
    <div className="container max-w-[450px] md:max-w-full bg-zinc-800 text-white px-1  md:pl-24">
        {props.children}
    </div>
};

export default Layout;