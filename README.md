#MIT SLOAN PM Hackathon submission

# Full Page Capture Chrome Extension

This Chrome extension is an AI-powered accessiblity tool allows blind and visually impaired business owners to access insights from online business web applications such as google analytics for their e-commerce websites. Once started, it automatically scrolls through the page, takes snapshots, and caches them and sends them as input to a multimodal LLM to extract the text and images to provide contextual understanding of the active webpage.

v1 is an MVP of this that allows the user to install the extension in Google Chrome, and once started by selecting the extension, it automatically accesses the content of the active tab, and scans by automatically scrolling the page to take snapshots of the webpage and caches the images to be processed by the llm. 

## Installation

To install this extension, follow these steps:

### Prerequisites

- Google Chrome browser.

### Loading the Extension

1. **Download the Extension**:  
   - Clone the repository to your local machine using `git` or download the ZIP file and extract it.

      ```bash
      git clone http://github.com/joachimaare/enlight_mvp_v1.git
      ```

   - If you downloaded as a ZIP, unzip the content to a directory of your choice.

2. **Open Chrome**:  
   - Navigate to `chrome://extensions/` in your Chrome browser.

3. **Enable Developer Mode**:  
   - Enable "Developer mode" by ticking the checkbox in the upper-right corner.
![Screenshot 2024-02-22 134223](https://github.com/joachimasare/enlight_mvp_v1/assets/47057544/c358ff95-54f6-41d4-a34e-90e6f840b1de)

4. **Load the Extension**:  
   - Click on the "Load unpacked" button.
   - Navigate to the directory where you cloned or unzipped the extension.
   - Select the directory and click "Open".
![Screenshot 2024-02-22 134238](https://github.com/joachimasare/enlight_mvp_v1/assets/47057544/f2386216-100f-435e-bfc8-59d512bd9d23)

The extension should now be installed in your Chrome browser.
![Screenshot 2024-02-22 134251](https://github.com/joachimasare/enlight_mvp_v1/assets/47057544/f2b2f73e-ae46-41f2-87d2-01b53f0c68ce)

## Usage

To use the Full Page Capture extension, simply click on its icon in the Chrome toolbar while you are on the page you wish to capture. The extension will start capturing the visible part of the page and then automatically scroll and capture the rest of the page. Once the capture process is complete, you will see the screenshots logged in the console.
![Screenshot 2024-02-22 134307](https://github.com/joachimasare/enlight_mvp_v1/assets/47057544/575b01e9-c453-423b-8fd1-e6789ef12f99)

![Screenshot 2024-02-22 134318](https://github.com/joachimasare/enlight_mvp_v1/assets/47057544/33b30bad-2ecb-4093-b59d-6ef74c1ef281)

![Screenshot 2024-02-22 134336](https://github.com/joachimasare/enlight_mvp_v1/assets/47057544/ca79d040-6605-4833-bb5c-bd141867a896)

## Proprietary
 This code is temporarily made public only for submission to and access by the MIT SLOAN PM Hackathon team.


