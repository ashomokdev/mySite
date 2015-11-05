//JSON data
var data = [
    {
        title: "How to Start a Profitable eBay shopping",
        tags: ["shopping", "market", "eBay"],
        message: "eBay is a popular shopping website where individuals " +
        "and businesses can buy and sell new and second-hand items. In this guide, we’re going to show you how to buy" +
        " something on eBay, either by bidding in an online auction or buying at a fixed price.   You’ll need: " +
        "  a computer with an internet connection a credit or debit card. Follow these step-by-step instructions " +
        "on how to buy on eBay   Bidding in an online auction   Step 1: Go to the eBay website.   Step 2: You can " +
        "buy or sell on eBay only if you’re registered, so if you’re new to eBay, click register (above the eBay logo). ",
        time: "21:24 04.11.2015",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1b/EBay_logo.svg/2000px-EBay_logo.svg.png"
    },
    {
        title: "The biggest Chinese Online MarketPlace",
        tags: ["shopping", "market", "Aliexpress"],
        message: "In order to start an online business, you need two things, a product idea and supply. If you already " +
        "have your product idea the next step is finding the perfect supplier. In our global village, it has never been" +
        " easier to find a manufacturing or wholesaling partner halfway around the world, however sourcing your products" +
        " from overseas can still seem like a daunting task for new online entrepreneurs.In today’s post, we’re going to" +
        " look at how to effectively and safely source a supplier for your product idea using the popular business " +
        "directory Alibaba. We'll introduce you to the pros and cons of going overseas and show you how to navigate " +
        "this new terrain so you can lock onto the perfect supplier for your product idea and get started selling online.",
        time: "21:50 04.11.2015",
        image: "http://toplogos.ru/images/logo-aliexpress.png"
    }
];

var TagList = React.createClass({
    render: function(){
        var tagNodes = this.props.data.map(function (tag) {
            return (
                <a href="#">
                    <span className="label label-info">{tag}</span>
                </a>
            );
        });

        return (
            <div className="tags">
                {tagNodes}
            </div>
        );
    }
});

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

                                <TagList data={this.props.tags}/>

                            <div className="border-box mainText">
                                {this.props.message}
                            </div>
                        </div>

                        <div className="col-lg-5 col-md-5 col-sm-6 col-xs-12">
                            <div className="thumbnail article-image">
                                <img className="article-image" src={this.props.image}/>
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
                <Post title={post.title} message = {post.message} tags={post.tags} image={post.image}/>
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
