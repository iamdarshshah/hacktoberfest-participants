<div align="center">
  <table border="0" cellspacing="0" cellpadding="0">
    <thead>
      <tr>
        <th>
          <strong><a href="https://ireact.tech">Light Theme</a></strong>
        </th>
        <th>
          <strong><a href="https://ireact.tech">Dark Theme</a></strong>
        </th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>
            <img
              alt="Light Theme"
              src="https://github.com/iamdarshshah/hacktoberfest-participants/blob/master/src/static/light-theme.png"
            />
        </td>
        <td>
            <img
              alt="Dark Theme"
              src="https://github.com/iamdarshshah/hacktoberfest-participants/blob/master/src/static/dark-theme.png"
            />
        </td>
      </tr>
    </tbody>
  </table>
</div>

# Hacktoberfest participants

A platform that shows a list of all the hackers, participated in month-long
challenge Hacktoberfest presented by DigitalOcean.

## Installation & Set Up

1. In the top-right corner of the page, click Fork. Create a local clone of your
   fork:

   ```sh
   git clone https://github.com/YOUR-USERNAME/hacktoberfest-participants
   ```

2. Change directory

   ```sh
   cd hacktoberfest-participants
   ```

3. Install the Gatsby CLI

   ```sh
   npm install -g gatsby-cli
   ```

4. Install dependencies

   ```sh
   npm install or yarn or npm i
   ```

5. Start the development server

   ```sh
   npm run develop
   ```

## Steps to add yourself in the list

1. Create new file under **src/contributors/** with name [your-username].json
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

3. Commit and generate your awesome pull request with us at
   **iamdarshshah/hacktoberfest-participants**

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

See the [guidelines](CONTRIBUTING.md) for contributing to this project.

## License

[MIT](LICENSE)

> Disclaimer: This website is a fan and community made creation. It is not
> affiliated with [Hacktoberfest](https://hacktoberfest.digitalocean.com/)
