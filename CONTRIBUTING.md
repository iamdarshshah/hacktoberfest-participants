# 🤝 Contributing

Thank you for considering and taking the time to contribute!💖 This is an
experimental project to push newbies and help them take their first step toward
open-source world. This will help them to kick-start journey as a Open-Source
contributor.

**Working on your first Pull Request?** You can learn how from this _free_
series [How to Contribute to an Open Source Project on GitHub][egghead]

The following are guidelines for contributing to this project.

## ⚙️ Project setup

1.  Fork and clone the repo

2.  Install the Gatsby CLI

    ```sh
    npm install -g gatsby-cli
    ```

3.  Install dependencies

    ```sh
    npm install or yarn or npm i
    ```

4.  Create a branch for your PR with `git checkout -b your-branch-name`

> Tip: Keep your `master` branch pointing at the original repository and make
> pull requests from branches on your fork. To do this, run:
>
> ```
> git remote add upstream https://github.com/iamdarshshah/hacktoberfest-participants.git
> git fetch upstream
> git branch --set-upstream-to=upstream/master master
> ```
>
> This will add the original repository as a "remote" called "upstream," Then
> fetch the git information from that remote, then set your local `master`
> branch to use the upstream master branch whenever you run `git pull`. Then you
> can make all of your pull request branches based on this `master` branch.
> Whenever you want to update your version of `master`, do a regular `git pull`.

5. Start the development server

   ```sh
   npm run develop
   ```

## 🗳️ Building and Running for Production

1. Generate a full static production build

   ```sh
   npm run build
   ```

2. Preview the site as it will appear once deployed

   ```sh
   npm run serve
   ```

## 🐛 How to Report Bugs

Please open a [new issue][new-issue] including steps to reproduce the problem
you're experiencing.

Be sure to include as much information including screenshots, text output, and
both your expected and actual results.

## 🙏 Help needed

Please checkout the [the open issues][issues-list]

Also, please watch the repo and respond to questions/bug reports/feature
requests! Thanks!

[new-issue]:
  https://github.com/iamdarshshah/hacktoberfest-participants/issues/new
[github-repo]: https://github.com/iamdarshshah/hacktoberfest-participants/
[issues-list]: https://github.com/iamdarshshah/hacktoberfest-participants/issues
[egghead]:
  https://egghead.io/series/how-to-contribute-to-an-open-source-project-on-github
