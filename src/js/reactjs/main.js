//JSON data
var data = [
    {
        title: "How to Start a Profitable eBay shopping",
        message: "eBay is a popular shopping website where individuals " +
        "and businesses can buy and sell new and second-hand items. In this guide, we’re going to show you how to buy" +
        " something on eBay, either by bidding in an online auction or buying at a fixed price.   You’ll need: " +
        "  a computer with an internet connection a credit or debit card. Follow these step-by-step instructions " +
        "on how to buy on eBay   Bidding in an online auction   Step 1: Go to the eBay website.   Step 2: You can " +
        "buy or sell on eBay only if you’re registered, so if you’re new to eBay, click register (above the eBay logo). ",
        time: "21:24 04.11.2015",
    },
    {
        title: "The biggest Chinese Online MarketPlace",
        message: "In order to start an online business, you need two things, a product idea and supply. If you already " +
        "have your product idea the next step is finding the perfect supplier. In our global village, it has never been" +
        " easier to find a manufacturing or wholesaling partner halfway around the world, however sourcing your products" +
        " from overseas can still seem like a daunting task for new online entrepreneurs.In today’s post, we’re going to" +
        " look at how to effectively and safely source a supplier for your product idea using the popular business " +
        "directory Alibaba. We'll introduce you to the pros and cons of going overseas and show you how to navigate " +
        "this new terrain so you can lock onto the perfect supplier for your product idea and get started selling online.",
        time: "21:50 04.11.2015",
    }
];

var Post = React.createClass({
    render: function () {
        return (
            <div className="panel-default">
                <div className="panel-body">
                    <div className="row">
                        <div className="col-lg-7 col-md-7 col-sm-6 col-xs-12">
                            <h1 className="postTitle">
                                {this.props.title}
                            </h1>

                            <div className="border-box mainText">
                                {this.props.message}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
});

var PostList = React.createClass({
    render: function () {
        var postNodes = this.props.data.map(function (post) {
            return (
                <Post title={post.title} message = {post.message}/>
            );
        });
        return (
            <div className="postList">
                {postNodes}
            </div>
        );
    }
});

var PostBox = React.createClass({
    render: function () {
        return (
            <div className="panel">
                <PostList data={this.props.data}/>
            </div>
        );
    }
});

ReactDOM.render(
    <PostBox data={data}/>,
    document.getElementById('content')
);
