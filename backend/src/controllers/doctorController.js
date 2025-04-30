const Doctor = require('../models/Doctor');

exports.addDoctor = async (req, res) => {
  try {
    const doctor = new Doctor(req.body);
    await doctor.save();
    res.status(201).json(doctor);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

exports.listDoctors = async (req, res) => {
  try {
    const { location, experience, page = 1, limit = 10 } = req.query;
    const query = { specialization: 'general-physician' };
    
    if (location) query.location = location;
    if (experience) query.experience = { $gte: parseInt(experience) };

    const doctors = await Doctor.find(query)
      .skip((page - 1) * limit)
      .limit(limit);

    const total = await Doctor.countDocuments(query);

    res.json({
      doctors,
      currentPage: parseInt(page),
      totalPages: Math.ceil(total / limit),
      total
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};