import {
  bio,
  skills,
  projects,
  education,
  experience,
  footer,
  contactLinks,
} from "./user-data/data.js";
import { html, render } from "https://unpkg.com/lit-html?module";

import { URLs, githubUsername } from "./user-data/urls.js";

const { medium, gitConnected, gitRepo } = URLs;

async function fetchBlogsFromMedium(url) {
  try {
    const response = await fetch(url);
    const { items } = await response.json();
    populateBlogs(items, "blogs");
  } catch (error) {
    throw new Error(
      `Error in fetching the blogs from Medium profile: ${error}`
    );
  }
}

async function setProfileImage(githubUsername) {
  try {
    const response = await fetch(`https://api.github.com/users/${githubUsername}`);
    const { avatar_url } = await response.json();
    document.getElementById("profile-img").src = avatar_url;
  } catch (error) {
    console.error(`Error fetching GitHub profile image: ${error}`);
  }
}

async function fetchReposFromGit(url) {
  try {
    const response = await fetch(url);
    const items = await response.json();
    populateRepo(items, "repos");
  } catch (error) {
    throw new Error(`Error in fetching the blogs from repos: ${error}`);
  }
}

async function fetchGitConnectedData(url) {
  try {
    const response = await fetch(url);
    const { basics } = await response.json();
    mapBasicResponse(basics);
  } catch (error) {
    throw new Error(`Error in fetching the blogs from git connected: ${error}`);
  }
}

function mapBasicResponse(basics) {
  const {
    name,
    label,
    image,
    email,
    phone,
    url,
    summary,
    profiles,
    headline,
    blog,
    yearsOfExperience,
    username,
    locationAsString,
    region,
    karma,
    id,
    followers,
    following,
    picture,
    website,
  } = basics;

  window.parent.document.title = name;
}

function populateBio(items, id) {
  const bioTag = document.getElementById(id);
  const bioTemplate = html` ${items.map((bioItem) => html`<p>${bioItem}</p>`)}`;
  render(bioTemplate, bioTag);
}

function populateSkills(items, id) {
  const skillsTag = document.getElementById(id);

  const skillsTemplate = html` ${items.map(
    (category) => html`
      <div class="col-md-2 animate-box" style="margin-bottom: 30px; min-width: 185px;">
        <h3 style="color: #9FA8DA; margin-bottom: 15px; font-size: 16px;">${category.category}</h3>
        <ul style="list-style: none; padding: 0;">
          ${category.items.map(
            (skill) => html`<li class="skill-item" style="margin-bottom: 8px; font-size: 16px;">${skill}</li>`
          )}
        </ul>
      </div>`
  )}`;
  render(skillsTemplate, skillsTag);
}

function populateProjects(items, id) {
  const projectsTag = document.getElementById(id);

  const projectsTemplate = html`
    ${items.map(
      (project) => html`
        <div class="col-md-12 animate-box" data-animate-effect="fadeInLeft">
          <div class="project-card">
            <div class="project-header">
              <h2 class="project-title">${project.title}</h2>
              <div class="project-links">
                ${project.link ? html`
                  <a href="${project.link}" target="_blank" class="project-link-btn">
                    Live Demo →
                  </a>
                ` : ''}
                <a href="${project.githubRepo}" target="_blank" class="project-link-btn">
                  <i class="fa-brands fa-github"></i> GitHub
                </a>
              </div>
            </div>
            <p class="project-description">${project.description}</p>
            <div class="project-tech-stack">
              ${project.techStack.map(
                (tech) => html`<span class="tech-tag">${tech}</span>`
              )}
            </div>
          </div>
        </div>
      `
    )}
  `;
  render(projectsTemplate, projectsTag);
}

function populateBlogs(items, id) {
  const projectdesign = document.getElementById(id);
  const createCategoryBadges = (categories) => html`
    <div class="categories-div">
      ${categories.map(
        (category) => html` <div class="profile-badge brown-badge">${category}</div> `
      )}
    </div>
  `;

  const blogTemplate = html`
    ${items.slice(0, 3).map(
      (item) => html`
        <div class="blog-card">
          <div class="blog-content">
            <a href="${item.link}" target="_blank" class="blog-link">
              <p class="blog-heading">${item.title}</p>
              <p class="publish-date">${getBlogDate(item.pubDate)}</p>
              <p class="blog-description">
                ${item.content.replace(/<[^>]*>/g, '').trim()}
              </p>
              ${createCategoryBadges(item.categories)}
            </a>
          </div>
        </div>
      `
    )}
  `;

  render(blogTemplate, projectdesign);
}

function populateRepo(items, id) {
  const projectdesign = document.getElementById(id);
  if (!projectdesign || !items?.length) return;

  const statsTemplate = (item) => html`
    <div class="stats-row">
      <div class="language-div">
        <span class="language-dot"></span>
        ${item.language}
      </div>
      <div class="stats-div">
        <img
          src="https://img.icons8.com/ios-filled/16/666666/star--v1.png"
          alt="Stars"
        />
        ${item.stars}
      </div>
      <div class="stats-div">
        <img
          src="https://img.icons8.com/ios-filled/16/666666/code-fork.png"
          alt="Forks"
        />
        ${item.forks}
      </div>
    </div>
  `;

  const repoTemplate = html`
    <div class="repo-wrapper">
      ${items.slice(0, 4).map(
        (item) => html`
          <div class="repo-card">
            <a
              href="https://github.com/${item.author}/${item.name}"
              target="_blank"
              class="repo-link"
            >
              <p class="repo-heading">${item.name}</p>
              <p class="repo-description">${item.description}</p>
              ${statsTemplate(item)}
            </a>
          </div>
        `
      )}
    </div>
  `;

  render(repoTemplate, projectdesign);
}

function populateExp_Edu(items, id) {
  const mainContainer = document.getElementById(id);
  if (!mainContainer || !items?.length) return;

  const detailsTemplate = (details) => html`
    ${details.map(
      (detail) => html` <p class="timeline-text">&blacksquare; ${detail}</p> `
    )}
  `;

  const tagsTemplate = (tags) => html`
    <div class="tags-container">
      ${tags.map((tag) => html`<div class="profile-badge brown-badge">${tag}</div>`)}
    </div>
  `;

  const timelineTemplate = html`
    ${items.map(
      (item) => html`
        <article class="timeline-entry animate-box">
          <div class="timeline-entry-inner">
            <div class="timeline-icon color-2">
              <i class="fa fa-${item.icon}"></i>
            </div>
            <div class="timeline-label">
              <div class="exp-heading">
                <p class="blog-heading">${item.title}</p>
                <span class="publish-date">${item.duration}</span>
              </div>
              <span class="timeline-sublabel">${item.subtitle}</span>
              ${detailsTemplate(item.details)} ${tagsTemplate(item.tags)}
            </div>
          </div>
        </article>
      `
    )}
    <article class="timeline-entry begin animate-box">
      <div class="timeline-entry-inner">
        <div class="timeline-icon color-2"></div>
      </div>
    </article>
  `;

  render(timelineTemplate, mainContainer);
}

function populateLinks(items, id) {
  const footer = document.getElementById(id);
  if (!footer || !items?.length) return;

  const linkTemplate = (data) => html`
    <li>
      <a
        href="${data.link || "#"}"
        @click="${data.func || null}"
      >
        ${data.text}
      </a>
    </li>
  `;

  const columnTemplate = (item) => html`
    <span class="col">
      <p class="col-title">${item.label}</p>
      <nav class="col-list">
        <ul>
          ${item.data.map((data) => linkTemplate(data))}
        </ul>
      </nav>
    </span>
  `;

  const copyrightTemplate = (item) => html`
    <div class="copyright-text no-print">
      ${item.data.map((copyright) =>
        typeof copyright === 'string'
          ? html`<p>${copyright}</p>`
          : html`<p>
              ${copyright.text}
              <a href="${copyright.link.url}" target="_blank" rel="noopener noreferrer">
                ${copyright.link.text}
              </a>
            </p>`
      )}
    </div>
  `;

  const footerTemplate = html`
    ${items.map(
      (item) => html`
        ${item.label === "copyright-text"
          ? copyrightTemplate(item)
          : columnTemplate(item)}
      `
    )}
  `;

  render(footerTemplate, footer);
}

function populateContactLinks(items, id) {
  const contactLinks = document.getElementById(id);
  if (!contactLinks || !items?.length) return;
  const contactLinkTemplate = (item) => html`
    <li class="profile-card" style="padding: 6px 12px">
      <a href="${item.link}" target="_blank" class="contact-link">
        <i class="${item.icon}"></i>
        <span class="contact-label">${item.label}</span>
      </a>
    </li>
  `;
  const contactLinksTemplate = html`
    <ul class="contact-links-list">
      ${items.map((item) => contactLinkTemplate(item))}
    </ul>
  `;
  render(contactLinksTemplate, contactLinks);
}

function getElement(tagName, className) {
  let item = document.createElement(tagName);
  item.className = className;
  return item;
}

function getBlogDate(publishDate) {
  const elapsed = Date.now() - Date.parse(publishDate);

  // Time conversions in milliseconds
  const msPerSecond = 1000;
  const msPerMinute = msPerSecond * 60;
  const msPerHour = msPerMinute * 60;
  const msPerDay = msPerHour * 24;
  const msPerMonth = msPerDay * 30;
  const msPerYear = msPerDay * 365;

  if (elapsed < msPerMinute) {
    const seconds = Math.floor(elapsed / msPerSecond);
    return `${seconds} seconds ago`;
  } else if (elapsed < msPerHour) {
    const minutes = Math.floor(elapsed / msPerMinute);
    return `${minutes} minutes ago`;
  } else if (elapsed < msPerDay) {
    const hours = Math.floor(elapsed / msPerHour);
    return `${hours} hours ago`;
  } else if (elapsed < msPerMonth) {
    const days = Math.floor(elapsed / msPerDay);
    return days == 1 ? `${days} day ago` : `${days} days ago`;
  } else if (elapsed < msPerYear) {
    const months = Math.floor(elapsed / msPerMonth);
    return months == 1 ? `${months} month ago` : `${months} months ago`;
  } else {
    const years = Math.floor(elapsed / msPerYear);
    return years == 1 ? `${years} year ago` : `${years} years ago`;
  }
}

populateBio(bio, "bio");

populateProjects(projects, "projects");

populateSkills(skills, "skills");

setProfileImage(githubUsername);
fetchBlogsFromMedium(medium);
fetchReposFromGit(gitRepo);
fetchGitConnectedData(gitConnected);

populateExp_Edu(experience, "experience");
populateExp_Edu(education, "education");

populateLinks(footer, "footer");
populateContactLinks(contactLinks, 'contact-links');

// Fetch and display last updated date from GitHub
async function fetchLastUpdatedDate() {
  try {
    const repo = 'djhuangit/djhuangit.github.io';
    const response = await fetch(`https://api.github.com/repos/${repo}/commits?per_page=1`);
    const commits = await response.json();

    if (commits && commits.length > 0) {
      const lastCommitDate = new Date(commits[0].commit.author.date);
      const sixMonthsAgo = new Date();
      sixMonthsAgo.setMonth(sixMonthsAgo.getMonth() - 6);

      // Only display if updated within last 6 months
      if (lastCommitDate >= sixMonthsAgo) {
        const options = { year: 'numeric', month: 'short' };
        const formattedDate = lastCommitDate.toLocaleDateString('en-US', options);

        document.getElementById('last-updated-date').textContent = formattedDate;
        document.getElementById('last-updated').style.display = 'block';
      }
    }
  } catch (error) {
    console.error('Error fetching last updated date:', error);
  }
}

fetchLastUpdatedDate();
