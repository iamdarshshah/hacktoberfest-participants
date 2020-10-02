# Hacktoberfest participants

A platform that shows a list of all the hackers, participated in month-long challenge Hacktoberfest presented by DigitalOcean.

## Installation & Set Up

1. In the top-right corner of the page, click Fork. Create a local clone of your fork:

   ```sh
   git clone https://github.com/YOUR-USERNAME/hacktoberfest-participants
   ```

2. Install and use the correct version of Node using [NVM](https://github.com/nvm-sh/nvm)

   ```sh
   cd hacktoberfest-participants
   nvm install
   ```

3. Install the Gatsby CLI

   ```sh
   npm install -g gatsby-cli
   ```

4. Install dependencies

   ```sh
   npm install
   ```

5. Start the development server

   ```sh
   npm run develop
   ```

## Steps to add yourself in the list

1. Create new file under **hacktoberfest-participants/src/data/contributors/** with name [your-username].json
2. Add this json content and edit it with your details

```
{
    "name": "Darsh Shah",
    "desc": "This is test Desc."
    "github" : "https://github.com/iamdarshshah",
    "twitter" : "https://twitter.com/iamdarshshah",
    "linkedin" : "https://www.linkedin.com/in/iamdarshshah"
}
```

3. Commit and generate your awesome pull request with us at **iamdarshshah/hacktoberfest-participants**

Take a look [here](./example-showcase/add_me.md) for detailed version.

## Building and Running for Production

1. Generate a full static production build

   ```sh
   npm run build
   ```

1. Preview the site as it will appear once deployed

   ```sh
   npm run serve
   ```

## Contributing

Pull requests are welcome.

See the [guidelines](contributing.md) for contributing to this project.

## License

[MIT](https://choosealicense.com/licenses/mit/)
