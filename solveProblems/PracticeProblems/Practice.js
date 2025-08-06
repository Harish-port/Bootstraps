const comments = [
    {
        id: 1,
        text: 'Example comment here.',
        children: [
            {
                id: 2,
                text: 'Another example comment text.',
                children: [
                    {
                        id: 3,
                        text: 'Another example comment text.',
                        children: [],
                    },
                ],
            },
        ],
    },
    {
        id: 4,
        text: 'Example comment here 2.',
        children: [],
    },
];

function text(comments) {
    for (comment of comments) {
        console.log(comment.text);
        if (comment.children.length > 0) {
            text(comment.children)
        }
    }
}
console.log(
    text(comments)
);
