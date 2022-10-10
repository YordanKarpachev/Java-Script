class ArtGallery {
    constructor(creator) {
        this.creator = creator;
        this.possibleArticles = {
            picture: 200, photo: 50, item: 250
        };
        this.listOfArticles = [];
        this.guests = []

    }

    addArticle(articleModel, articleName, quantity) {
        articleModel = articleModel.toLowerCase();
        if (!this.possibleArticles[articleModel]) {
            throw new Error("This article model is not included in this gallery!");
        }
        if (!this.listOfArticles.find(a => a.articleName == articleName)) {
            this.listOfArticles.push({
                articleModel: articleModel,
                articleName: articleName,
                quantity: quantity
            });

        } else {
            this.listOfArticles.find(a => a.articleName == articleName).quantity += quantity;

        }

        return `Successfully added article ${articleName} with a new quantity- ${quantity}.`;
    }

    inviteGuest(guestName, personality) {
        if (this.guests.find(a => a.guestName == guestName)) {
            throw new Error(`${guestName} has already been invited.`)
        }

        let point = 0;

        if (personality == "Vip") {
            point = 500;
        } else if (personality == "Middle") {
            point = 250;
        } else {
            point = 50;
        }


        this.guests.push({
            guestName: guestName,
            points: point,
            purchaseArticle: 0
        });
        return `You have successfully invited ${guestName}!`
    }

    buyArticle(articleModel, articleName, guestName) {
        let currentArticle = this.listOfArticles.find(a => a.articleName == articleName);
        if (!this.listOfArticles.find(a => a.articleName == articleName) || !this.listOfArticles.find(a => a.articleModel == articleModel)) {
            throw new Error("This article is not found.");
        }
        if(currentArticle.articleModel != articleModel){
            throw new Error("This article is not found.");
        }

        if (currentArticle.quantity <= 0) {
            return `The ${articleName} is not available.`
        }
        if (!this.guests.find(a => a.guestName == guestName)) {
            return "This guest is not invited.";
        }
        let currentGuest = this.guests.find(a => a.guestName == guestName);

        if (this.possibleArticles[currentArticle.articleModel] > currentGuest.points) {
            return "You need to more points to purchase the article.";
        } else {
            currentGuest.points -= this.possibleArticles[this.possibleArticles[currentArticle.articleModel]];
            currentArticle.quantity--;
            currentGuest.purchaseArticle++;
            return `${guestName} successfully purchased the article worth ${this.possibleArticles[currentArticle.articleModel]} points.`
        }
    }
    showGalleryInfo(criteria) {
        let res = [];
        if (criteria == "article") {
            res.push("Articles information:");
            this.listOfArticles.forEach(a => {
                res.push(`${a.articleModel} - ${a.articleName} - ${a.quantity}`)
            });

        } else if (criteria == "guest") {
            res.push("Guests information:");
            this.guests.forEach(a => {
                res.push(`${a.guestName} - ${a.purchaseArticle}`)
            });
        }
        return res.join("\n");
    }

}



const artGallery = new ArtGallery('Curtis Mayfield');
artGallery.addArticle('picture', 'Mona Liza', 3);
artGallery.addArticle('Item', 'Ancient vase', 2);
artGallery.addArticle('picture', 'Mona Liza', 1);
artGallery.inviteGuest('John', 'Vip');
artGallery.inviteGuest('Peter', 'Middle');
console.log(artGallery.buyArticle('picture', 'Mona Liza', 'John'));
console.log(artGallery.buyArticle('item', 'Ancient vase', 'Peter'));
console.log(artGallery.buyArticle('item', 'Mona Liza', 'John'));

