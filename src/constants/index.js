import {
  python,
  tensorflow,
  scikit_learn,
  pytorch,
  keras,
  numpy,
  pandas,
  pycharm,
  jupyter,
  mobile,
  backend,
  creator,
  web,
  gan_dapt,
  neuro_drive,
  market_predict,
  microsoft,
  adani,
  bn_software,
  ericsson,
  kamel_tourki,
  nati_gezahegn,
  zakaria,
} from '../assets';

export const navLinks = [
  {
    id: 'about',
    title: 'About',
  },
  {
    id: 'work',
    title: 'Work',
  },
  {
    id: 'contact',
    title: 'Contact',
  },
];

const services = [
  {
    title: 'Machine Learning',
    icon: web,
  },
  {
    title: 'Algorithms and Models',
    icon: mobile,
  },
  {
    title: 'Deep Learning Frameworks',
    icon: backend,
  },
  {
    title: 'Neural Networks',
    icon: creator,
  },
];

const technologies = [
  {
    name: 'Python',
    icon: python,
  },
  {
    name: 'Tensorflow',
    icon: tensorflow,
  },
  {
    name: 'Scikit Learn',
    icon: scikit_learn,
  },
  {
    name: 'PyTorch',
    icon: pytorch,
  },
  {
    name: 'Keras',
    icon: keras,
  },
  {
    name: 'NumPy',
    icon: numpy,
  },
  {
    name: 'Pandas',
    icon: pandas,
  },
  {
    name: 'PyCharm',
    icon: pycharm,
  },
  {
    name: 'Jupyter',
    icon: jupyter,
  },
];

const experiences = [
  {
    title: 'Aerospace Researcher',
    company_name: 'ORBITX INDIA AEROSPACE (p) LTD',
    icon: adani,
    iconBg: '#E6DEDD',
    date: 'Aug 2022 - Jun 2023',
    points: [
      'Conduct research and development in the field of aerospace engineering. ',
      'Design and test new aerospace technologies.',
      'Analyze data and results to identify potential improvements and solutions.',
      'Maintain a working knowledge of industry trends and advancements .',
      'Write technical reports and papers to share research findings with colleagues and the broader scientific community.',
    ],
  },
  {
    title: 'Content Writer',
    company_name: 'GeeksforGeeks',
    icon: bn_software,
    iconBg: '#E6DEDD',
    date: 'Jan 2023 - July 2023',
    points: [
      ' Research and understand complex technical concepts and translate them into easy-to-understand, concise, and engaging content.',
      'Create and update technical articles, tutorials, and coding examples on various computer science and programming topics.',
      'Collaborate with subject matter experts, developers, and the editorial team to ensure content accuracy, completeness, and quality.',
      'Stay up-to-date with the latest trends, tools, and technologies in the field of computer science and programming.',
      'Conduct thorough proofreading and editing to ensure grammatical correctness, clarity, and adherence to GeeksforGeeks style guidelines.',
      'Optimize content for search engines and ensure effective use of keywords to enhance discoverability.',
      ' Contribute ideas for new content, innovative formats, and improvements to enhance the overall user experience.',
    ],
  },
  {
    title: 'CEO & Founder',
    company_name: 'PIE STAR INTERACTIVE STUDIOS',
    icon: microsoft,
    iconBg: '#E6DEDD',
    date: 'Jan 2022 - Present',
    points: [
      'Develop and execute a strategic plan that aligns with the company's vision and mission.',
      'Oversee the day-to-day operations of the company, ensuring that it runs smoothly and efficiently.',
      'Build and lead a high-performing team, developing a culture of excellence, collaboration, and innovation.',
      'Foster strong relationships with key stakeholders, including customers, investors, and partners.',
      'Identify and evaluate new business opportunities, markets, and partnerships to drive growth and profitability.',
      'Ensure compliance with all legal and regulatory requirements, as well as ethical and social responsibilities.',
      'Represent the company in public forums, conferences, and media, serving as the face of the organization.',
    ],
  },
  {
    title: 'Machine Learning Intern',
    company_name: 'Poornima Institute of Engineering and Technology',
    icon: adani,
    iconBg: '#E6DEDD',
    date: 'July 2023 - September 2023',
    points: [
      'Completed a summer internship in Machine Learning using Python with A+ grade.',
      'Worked on analysis of machine learning algorithms for detecting abnormalities and electricity theft.',
      'Analyzed data from smart meters to train Linear, Quadratic Regression models to predict theft with a minimum RMSE value of 0.06.',
      'Participating in code reviews and providing feedback on machine learning code and implementations.',
      'Worked on Time Series-based Data Analysis for Taxi Service.',
      'Created analysis and visualisation tools to analyse the behaviour of our agents.',
      'Implemented a Recommendation Systems for our delivery application.',
      'Staying updated with the latest advancements and best practices in data science through self-learning and research.'
    ],
  },
];

const testimonials = [
  {
    testimonial:
      'An AI optimization prodigy for OFDM (mainly 5G), with outstanding problem solving skills and strong programming expertise, making him highly recommended.',
    name: 'Kamel Tourki',
    designation: 'Research and Standardization Manager',
    company: 'Ericsson',
    image: kamel_tourki,
  },
  {
    testimonial:
      'He has exemplified extraordinary prowess as a devoted, tireless, and imaginative AI master, coupled with remarkable personal qualities that radiate brilliance.',
    name: 'Nathnael Gezahegn',
    designation: 'CEO',
    company: 'BN Technologies',
    image: nati_gezahegn,
  },
  {
    testimonial:
      'Vikas is an exceptional AI expert, demonstrating unmatched talent in research, critical thinking, and harnessing PyTorch and Keras to their fullest potential.',
    name: 'Zakaria El Moutaki',
    designation: 'Standardization Researcher',
    company: 'Ericsson',
    image: zakaria,
  },
];

const projects = [
  {
    name: 'GAN-DAPT',
    description:
      'Leveraging domain-invariant image translations, I combined domain adaptation and generalization techniques for improved image segmentation.',
    tags: [
      {
        name: 'DaSeGAN',
        color: 'blue-text-gradient',
      },
      {
        name: 'DaSeGAN-S',
        color: 'green-text-gradient',
      },
      {
        name: 'DaSeGAN-T',
        color: 'pink-text-gradient',
      },
    ],
    image: gan_dapt,
    source_code_link: 'https://github.com/',
  },
  {
    name: 'Neuro Drive',
    description:
      'Successfully trained a cutting-edge self-driving car using Convolution neural networks (CNN) utilizing a state-of-the-art simulator provided by Udacity.',
    tags: [
      {
        name: 'Opencv-python',
        color: 'blue-text-gradient',
      },
      {
        name: 'Pandas',
        color: 'green-text-gradient',
      },
      {
        name: 'Numpy',
        color: 'pink-text-gradient',
      },
    ],
    image: neuro_drive,
    source_code_link: 'https://github.com/',
  },
  {
    name: 'Market Value Predictor',
    description:
      "I developed a powerful regression model using machine learning algorithms to predict professional football players' market value accurately.",
    tags: [
      {
        name: 'Python',
        color: 'blue-text-gradient',
      },
      {
        name: 'Linear Regression',
        color: 'green-text-gradient',
      },
      {
        name: 'Numpy',
        color: 'pink-text-gradient',
      },
    ],
    image: market_predict,
    source_code_link:
      'https://github.com/vikasharma005/Project-Market-Value-Predictor.git',
  },
];

export { services, technologies, experiences, testimonials, projects };
